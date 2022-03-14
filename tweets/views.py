from django.shortcuts import render
from django.conf import settings


ALLOWED_HOSTS = settings.ALLOWED_HOSTS
User = settings.AUTH_USER_MODEL

# Create your views here.
#@permission_classes([IsAuthenticated])
def tweets_list_view(request, *args, **kwargs):
    context = {
        "user": request.user.username
    }
    print(context)
    return render(request, "tweets/list.html", context)

# @permission_classes([IsAuthenticated])
def tweets_detail_view(request, tweet_id, *args, **kwargs):
    return render(request, "tweets/detail.html", context={"tweet_id": tweet_id})

