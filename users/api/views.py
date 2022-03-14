from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.contrib.auth import get_user_model
from ..serializers import UserSerializer

User = get_user_model()

@api_view(['GET'])
def user_auth_view(request, *args, **kwargs):
    user = get_user_via_sessionid(request) or request.user
    if user:
        status = 200
    else:
        status = 404
    
    userJson = UserSerializer(user)
    return Response(userJson.data, status=status)


def get_user_via_sessionid(request):
    user_id = request.session.get('_auth_user_id')
    qs = User.objects.filter(id=user_id)
    if not qs.exists():
        return None
    return qs.first()

def get_user_by_username(username):
    qs = User.objects.filter(username=username)
    return qs.first()