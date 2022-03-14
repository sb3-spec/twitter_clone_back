import re
from django.shortcuts import render
from django.conf import settings


ALLOWED_HOSTS = settings.ALLOWED_HOSTS

def home_view(request, *args, **kwargs):
    return render(request, 'pages/feed.html')