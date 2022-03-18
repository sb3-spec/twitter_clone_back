from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import get_user_model

from profiles.models import Profile
from profiles.serializers import PublicProfileSerializer
from tweets.serializers import TweetSerializer
from tweets.models import Tweet

User = get_user_model()


def authenticate_user(user):
    if not user:
        return Response({"details": "User could not be found"}, status=404)
    
    if not user.is_authenticated:
        return Response({"details": "Please log in"}, status=401)
    
    return None

@api_view(['GET', 'POST'])
def search_results(request, *args, **kwargs):
    search_term = request.data['search_term']
    user = get_profile_by_username(request)
    if authenticate_user(user):
        return authenticate_user(user)
    tweet_qs = Tweet.objects.search(search_term)
    tweet_serializer = TweetSerializer(tweet_qs, many=True)
    
    profile_qs = Profile.objects.search(search_term)
    
    
    profile_serializer = PublicProfileSerializer(profile_qs, many=True)
    
    
    
    if not tweet_qs and not profile_qs:
        return Response({"details": "no results found"}, status=200)
    
    return Response({"profiles": profile_serializer.data, "tweets": tweet_serializer.data}, status=200)
    
def get_profile_by_username(request):
    user = request.data['user']

    username = user['username']
    qs = Profile.objects.filter(user__username=username)
    if not qs.exists():
        return None
    return qs.first()

    