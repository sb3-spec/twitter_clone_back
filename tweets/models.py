from django.db import models
from django.conf import settings
from django.db.models import Q, Count


from django.contrib.auth import get_user_model

User = get_user_model()


# Create your models here.

User = settings.AUTH_USER_MODEL

class TweetLike(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    tweet = models.ForeignKey("Tweet", on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)
    
# class TweetChild(models.Model):
#     user = models.ForeignKey(User, on_delete=models.CASCADE)
#     tweet = models.ForeignKey("Tweet", on_delete=models.CASCADE)
#     parent = models.ForeignKey("Tweet", on_delete=models.CASCADE)
#     timestamp = models.DateTimeField(auto_now_add=True)

class TweetManager(models.Manager):
    def get_queryset(self, *args, **kwargs):
        return TweetQuerySet(self.model, using=self._db)  
    
    def feed(self, user):
        return self.get_queryset().feed(user)
    
    def user_tweets(self, username):
        return self.get_queryset().user_tweets(username)
    
    def user_retweets(self, username):
        return self.get_queryset().user_retweets(username)
    
    def user_likes(self, user):
        return self.get_queryset().user_likes(user)
    
    def all_tweets(self):
        return self.get_queryset().all_tweets()
    
    def search(self, seachTerm):
        return self.get_queryset().search(seachTerm)
    
    def trending_weekly(self):
        return self.get_queryset().trending_weekly()

class TweetQuerySet(models.QuerySet):
    def by_username(self, username):
        return self.filter(user__username=username)
    
    def feed(self, user):
        profile_exists = user.following.exists()
        followed_users_id = []
        if profile_exists:
            followed_users_id = user.following.values_list("user__id", flat=True) # [x.user.id for x in profiles].append(user.id)
        
        return self.filter(
            Q(user__id__in=followed_users_id) |
            Q(user=user) & Q(parent=None)
        ).distinct().order_by("-timestamp")
        
    def user_tweets(self, username):
        return self.filter(Q(user__username=username) & Q(parent=None)).distinct().order_by("-timestamp")
    
    def user_retweets(self, username):
        return self.filter(Q(user__username=username)).exclude(parent=None).distinct().order_by("-timestamp")
    
    def user_likes(self, user):
        liked_tweets = []
        qs = self.exclude(Q(likes=None))
        for tweet in qs:
            if user in tweet.likes.all():
                liked_tweets.append(tweet.id)
                
        return self.filter(Q(id__in=liked_tweets)).distinct().order_by("-timestamp")
    
    def all_tweets(self):
        return self.filter(Q(parent=None)).distinct().order_by("-timestamp")
                
    def search(self, search_term):
        relevant_tweets = []
        for tweet in self.filter(Q(parent=None)):
            if search_term in tweet.content and len(tweet.content) >= len(search_term): 
                relevant_tweets.append(tweet)
        return relevant_tweets    
        
    def trending_weekly(self):
        qs = self.filter(Q(parent=None)).exclude(Q(likes=None)).annotate(like_count=Count('likes'))
        return qs.order_by('-like_count')

            
    
        
        
class Tweet(models.Model):
    parent = models.ForeignKey("self", null=True, on_delete=models.SET_NULL)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="tweets") # many users can have many tweets
    likes = models.ManyToManyField(User, related_name='tweet_user', blank=True, through=TweetLike)
    content = models.TextField(blank=True, null=True)
    image = models.FileField(upload_to='images/', blank=True, null=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    objects = TweetManager()
    class Meta:
        ordering = ['-id']
    
    @property
    def is_retweet(self):
        return self.parent != None
    