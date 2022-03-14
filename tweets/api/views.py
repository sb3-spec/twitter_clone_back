from django.conf import settings
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.pagination import PageNumberPagination
import json

from django.contrib.auth import get_user_model

from profiles.serializers import PublicProfileSerializer

from ..serializers import TweetSerializer, TweetActionSerializer, TweetCreateSerializer


from ..models import Tweet

ALLOWED_HOSTS = settings.ALLOWED_HOSTS
User = get_user_model()



@api_view(['GET', 'POST'])
def api_get_trending_tweets(request, *args, **kwargs):
    user = get_user_by_username(request)
    if authenticate_user(user):
        return authenticate_user(user)
    
    qs = Tweet.objects.trending_weekly()
    serializer = TweetSerializer(qs, many=True)
    return Response(serializer.data)
    
    
@api_view(['GET', 'POST'])
def api_get_likes(request, username, *args, **kwargs):
    user = User.objects.get(username=username)
    qs = Tweet.objects.user_likes(user=user) 
    serializer = TweetSerializer(qs, many=True)
    return Response(serializer.data, status=200)

@api_view(['GET', 'POST'])
def api_get_retweets(request, username, *args, **kwargs):
    qs = Tweet.objects.user_retweets(username=username)
    serializer = TweetSerializer(qs, many=True)
    
    if not qs.exists():
        return Response({"details": "user has no tweets"}, status=202)
    else:
        return Response(serializer.data, status=200)

@api_view(['GET', 'POST'])
def api_get_user_tweets(request, username, *args, **kwargs):
    user = User.objects.filter(username=username).first()
    
    if not user:
        return Response({"details": "user does not exist"}, status=404)
    
    tweet_qs = Tweet.objects.user_tweets(user.username)
    serializer = TweetSerializer(tweet_qs, many=True)
    if not tweet_qs.exists():
        return Response({"details": "user has no tweets"}, status=202)
    else:        
        return Response(serializer.data, status=200)


@api_view(['GET', 'POST'])
def get_tweet_data_view(request, tweet_id, *args, **kwargs):
    user = get_user_by_username(request)
    if authenticate_user(user):
        return authenticate_user(user)
    
    data = request.data

    qs = Tweet.objects.filter(id=tweet_id)
    if not qs:
        return Response({"details": "Tweet does not exist"}, status=404)
    obj = qs.first()
    data["isRetweet"] = obj.is_retweet
    data['likes'] = obj.likes.count()
    qs = obj.likes.filter(username=user)
    data['didLike'] = qs.exists()
    qs = user.tweets.all()
    rtData = False
    for tweet in qs:
        if tweet.parent and tweet_id == tweet.parent.id:
            rtData = True
            break
    data['didRetweet'] = rtData
    return Response(data, status=200)
    

@api_view(['POST']) # http method that client has to send == POST
def tweet_create_view(request, *args, **kwargs):
    user = get_user_by_username(request)
    if authenticate_user(user):
        return authenticate_user(user)
    
    serializer = TweetCreateSerializer(data=request.data)
   
    if serializer.is_valid(raise_exception=True):
        obj = serializer.create(serializer.data, user)
        tweet_serializer = TweetSerializer(obj)
        return Response(tweet_serializer.data, 201)
    return Response({}, status=400)

@api_view(['DELETE', 'POST'])
def tweet_delete_view(request, tweet_id, *args, **kwargs):
    data = request.data
    user = get_user_by_username(request)
    if authenticate_user(user):
        return authenticate_user(user)
    
    qs = Tweet.objects.filter(id=tweet_id)
    if not qs.exists():
        return Response({}, status=404)
    qs = qs.filter(user=user)
    if not qs.exists():
        return Response({"message": "You cannot delete this tweet"}, status=401)
    obj = qs.first()
    obj.delete()
    return Response({"message": "Tweet removed"}, status=200)



@api_view(['DELETE', 'POST', 'GET'])
def tweet_action_view(request, *args, **kwargs):
    '''
    id is required
    Action options are like, unlike, and retweet
    '''
    user = get_user_by_username(request)
    
    
    if authenticate_user(user):
        return authenticate_user(user)
    

    serializer = TweetActionSerializer(data={"id": request.data['tweet_id'], "action": request.data['action']})
    
    if serializer.is_valid(raise_exception=True):
        data = serializer.validated_data
        tweet_id = data.get("id")
        action = data.get("action")
    qs = Tweet.objects.filter(id=tweet_id)
    if not qs.exists():
        return Response({"error": "tweet could not be found"}, status=400)
    obj = qs.first()
    if action == "like":
        obj.likes.add(user)
        serializer = TweetSerializer(obj)
        return Response(serializer.data)
    elif action == "unlike":
        obj.likes.remove(user)
        serializer = TweetSerializer(obj)
        return Response(serializer.data)
    elif action == 'retweet':
        qs = user.tweets.all()
        for tweet in qs:
            if tweet.parent and tweet.parent.id == obj.id:
                return Response({}, 200)
        new_tweet = Tweet.objects.create(user=user, parent=obj, content='')
        serializer = TweetSerializer(new_tweet)
        return Response(serializer.data, status=201)
    
    
def get_paginated_queryset_response(qs, request):
    paginator = PageNumberPagination()
    paginator.page_size = 20
    paginated_qs = paginator.paginate_queryset(qs, request)
    serializer = TweetSerializer(paginated_qs, many=True)
    return paginator.get_paginated_response(serializer.data)


@api_view(['GET', 'POST'])
def tweet_feed_view(request, *args, **kwargs):    
    user = get_user_by_username(request)    
     
    if authenticate_user(user):
        return authenticate_user(user)
    
    qs = Tweet.objects.feed(user)
    serializer = TweetSerializer(qs, many=True)

    return Response(serializer.data, status=200)
    

@api_view(['GET'])
def tweet_list_view(request, *args, **kwargs):
    qs = Tweet.objects.all_tweets()
    serializer = TweetSerializer(qs, many=True)
    return Response(serializer.data, status=200)


@api_view(['GET'])
def tweet_detail_view(request, tweet_id, *args, **kwargs):
    qs = Tweet.objects.filter(id=tweet_id)
    if not qs.exists():
        return Response({}, status=404)
    obj = qs.first()
    serializer = TweetSerializer(obj)
    return Response(serializer.data, status=200)


def get_user_by_username(request):
    user = request.data['user']
    username = user['username']
    qs = User.objects.filter(username=username)
    if not qs.exists():
        return None
    return qs.first()

def authenticate_user(user):
    if user == None:
        return Response({"error": "User could not be found"}, status=400)
    
    # if not user.is_authenticated:
    #     return Response({"error": "Please log in"}, status=401)
    
    return None





    
    