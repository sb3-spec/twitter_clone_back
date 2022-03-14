from django.urls import path

from tweets.api.views import (
    tweet_detail_view, 
    tweet_list_view, tweet_create_view,
    tweet_delete_view, tweet_action_view,
    tweet_feed_view
)

from .views import (
    tweets_detail_view
)

urlpatterns = [
    path('', tweet_list_view),
    path('global', tweet_list_view),
    path('action/', tweet_action_view),
    path('create/', tweet_create_view),
    path('<int:tweet_id>', tweets_detail_view),
    path('<int:tweet_id>/delete/', tweet_delete_view),
    
]