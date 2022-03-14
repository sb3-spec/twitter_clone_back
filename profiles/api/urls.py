from django.urls import path

from .views import (
    profile_detail_api_view, 
    api_edit_profile, api_get_curr_profile,
    follower_suggestions_api, follow_api,
    update_profile_pic_api
)

urlpatterns = [
    path('edit', api_edit_profile),
    path('image_update', update_profile_pic_api),
    path('auth', api_get_curr_profile),
    path('suggestions', follower_suggestions_api),
    path('follow', follow_api),
    path('<str:username>', profile_detail_api_view),
]