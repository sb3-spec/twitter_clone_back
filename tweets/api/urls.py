from django.urls import path

from .views import (
    tweet_detail_view, 
    tweet_list_view, tweet_create_view,
    tweet_delete_view, tweet_action_view,
    tweet_feed_view, 
    get_tweet_data_view, api_get_user_tweets, 
    api_get_retweets, api_get_likes,
    api_get_trending_tweets
    
)

urlpatterns = [
    path('', tweet_list_view),
    path('action', tweet_action_view),
    path('create/', tweet_create_view),
    path('<str:email>/feed', tweet_feed_view),
    path('trending', api_get_trending_tweets),
    path('retweets/<str:username>', api_get_retweets),
    path('likes/<str:username>', api_get_likes),
    path('<int:tweet_id>', tweet_detail_view),
    path('<str:email>', api_get_user_tweets),
    path('data/<int:tweet_id>', get_tweet_data_view),
    path('<int:tweet_id>/delete/', tweet_delete_view),
]