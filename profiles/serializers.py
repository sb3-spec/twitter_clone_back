from rest_framework import serializers

from .models import Profile
from django.contrib.auth import get_user_model

User = get_user_model()

class ProfileEditSerializer(serializers.Serializer):
    username = serializers.CharField()
    bio = serializers.CharField()
    location = serializers.CharField()


class PublicProfileSerializer(serializers.ModelSerializer):
    first_name = serializers.SerializerMethodField(read_only=True)
    last_name = serializers.SerializerMethodField(read_only=True)
    username = serializers.SerializerMethodField(read_only=True)
    follower_count = serializers.SerializerMethodField(read_only=True)
    following_count = serializers.SerializerMethodField(read_only=True)
    is_following = serializers.SerializerMethodField(read_only=True)
    email = serializers.SerializerMethodField(read_only=True)
    profile_picture = serializers.SerializerMethodField(read_only=True)
    profile_banner = serializers.SerializerMethodField(read_only=True)
    
    class Meta:
        model = Profile
        fields = [
            "first_name",
            "last_name",
            "bio",
            "location",
            "follower_count",
            "following_count",
            "username",
            "is_following",
            "email"   ,
            "profile_picture",
            "profile_banner"
        ]
        
    def get_first_name(self, obj):
        return obj.user.first_name
    
    def get_last_name(self, obj):
        return obj.user.last_name
    
    def get_username(self, obj):
        return obj.user.username
    
    def get_following_count(self, obj):
        return obj.user.following.count()
    
    def get_follower_count(self, obj):
        return obj.followers.count()
    
    def get_email(self, obj):
        return obj.user.email
    
    def get_profile_picture(self, obj):
        return obj.profile_picture
    
    def get_profile_banner(self, obj):
        return obj.profile_banner
    
    def get_is_following(self, obj):
        context = self.context
        request = context.get('request')
        is_following = False

        if request:
            user = get_user_by_username(request)
            if not user:
                return False
            is_following = user in obj.followers.all()
            
        return is_following
    
def get_user_by_username(request):
    if 'user' not in request.data.keys(): 
        return None
    user = request.data['user']
    
    username = user['username']
    qs = User.objects.filter(username=username)
    if not qs.exists():
        return None
    return qs.first()