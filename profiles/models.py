from django.db import models
from django.conf import settings
from django.db.models.signals import post_save

User = settings.AUTH_USER_MODEL

class FollowerRelation(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    profile = models.ForeignKey("Profile", on_delete=models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add=True)


class ProfileManager(models.Manager):
    def get_queryset(self, *args, **kwargs):
        return ProfileQuerySet(self.model, using=self._db)
    
    def search(self, search_term):
        return self.get_queryset().search(search_term)
    
    def follow_suggester(self, profile):
        return self.get_queryset().follow_suggester(profile)
    
    
class ProfileQuerySet(models.QuerySet):
    def search(self, search_term):
        relevant_profiles = []
        for profile in self:
            user = profile.user
            if search_term in profile.username:
                relevant_profiles.append(profile)
            elif profile.bio and search_term in profile.bio:
                relevant_profiles.append(profile)
            elif (user.last_name and search_term in user.last_name):
                relevant_profiles.append(profile)
            elif (user.last_name and search_term in user.first_name):
                relevant_profiles.append(profile)
        return relevant_profiles
    
    def follow_suggester(self, profile):
        sugg_list = []
        
        for _profile in Profile.objects.all():
            if not _profile.user in profile.followers.all():
                if not _profile == profile:
                    sugg_list.append(_profile)
                
        return sugg_list

        
        
# Create your models here.
class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    location = models.CharField(max_length=220, null=True, blank=True)
    bio = models.TextField(blank=True, null=True)
    followers = models.ManyToManyField(User, related_name="following", blank=True)
    timestamp = models.DateTimeField(auto_now=True)
    updated = models.DateTimeField(auto_now_add=True)
    profile_picture = models.IntegerField(default=0)
    profile_banner = models.IntegerField(default=0)
    objects = ProfileManager()
    
 

def user_did_save(sender, instance, created, *args, **kwargs):
    Profile.objects.get_or_create(user=instance)
    
post_save.connect(user_did_save, sender=User)