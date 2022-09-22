from rest_framework import serializers
from django.conf import settings
from .models import Tweet
from profiles.serializers import PublicProfileSerializer

MAX_TWEET_LENGTH = settings.MAX_TWEET_LENGTH
TWEET_ACTION_OPTIONS = settings.TWEET_ACTION_OPTIONS

class TweetActionSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    action = serializers.CharField()
    content = serializers.CharField(allow_blank=True, required=False)
    
    
    def validate_action(self, value):
        value = value.lower().strip()
        if not value in TWEET_ACTION_OPTIONS:
            raise serializers.ValidationError("This is not a valid action")
        return value
    
class TweetCreateSerializer(serializers.ModelSerializer):
    user = PublicProfileSerializer(source='user.profile', read_only=True)
    likes = serializers.SerializerMethodField(read_only=True)
    class Meta: 
        model = Tweet
        fields = ['id', 'content', 'likes', 'user']
    
    def get_user(self, obj):
        return obj.user.username
        
    def get_likes(self, obj):
        return 0
    
    def create(self, data, user):
        return Tweet.objects.create(user=user, content=data['content'])
    
    def validate_content(self, value):
        if len(value) > MAX_TWEET_LENGTH:
            raise serializers.ValidationError("This tweet is too long")
        return value
    
class TweetSerializer(serializers.ModelSerializer):
    user = PublicProfileSerializer(source='user.profile', read_only=True)
    likes = serializers.SerializerMethodField(read_only=True)
    parent = TweetCreateSerializer(read_only=True)
    user_has_retweeted = serializers.SerializerMethodField()
    user_has_retweeted = serializers.SerializerMethodField()
    
    class Meta: 
        model = Tweet
        fields = [
            'user',      
            'id',
             'content',
             'likes',
             'is_retweet',
             'parent',
             'timestamp',
             'user_has_retweeted',
             'user_has_retweeted'         
        ]
        
    def get_likes(self, obj):
        return obj.likes.count()
    
    def get_user_has_liked(self, obj):
        return True
    
    def get_user_has_retweeted(self, obj):
        return True
    

    

