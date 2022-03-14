from django.urls import path

from .views import (
    logout, login_api,
    register_api
)

urlpatterns = [
    path('login', login_api),
    path('logout', logout),
    path('register', register_api)
]
