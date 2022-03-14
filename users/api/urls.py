from django.urls import path

from .views import (
    user_auth_view
)

urlpatterns = [
    path('auth/', user_auth_view),

    
]