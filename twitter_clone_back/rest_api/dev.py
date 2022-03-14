from rest_framework import authentication
from django.contrib.auth import get_user_model

User = get_user_model()

class DevAuthentication(authentication.BasicAuthentication):
    def authenticate(self, request):
        qs = User.objects.filter(username='robert')
        user = qs.first()
        return (user, None)