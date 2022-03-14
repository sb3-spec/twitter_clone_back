from django.contrib.auth import login, logout, get_user_model, authenticate
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
from rest_framework.response import Response
from profiles.serializers import PublicProfileSerializer
import json

User = get_user_model()

@api_view(['POST'])
def login_api(request, *args, **kwargs):
    data = request.data
    user = authenticate(username=data['username'], password=data['password'])

    if not user:
        return Response({'details': 'Incorrect username or password'}, status=400)
    login(request._request, user)
    
    serializer = PublicProfileSerializer(instance=user.profile, context={"request": request})
    return Response(serializer.data)
    


api_view(['GET', 'POST'])
def logout(request, *args, **kwargs):
    logout(request._request)
    return Response({'details': 'Successfully logged out'},  status=200)

@api_view(['POST'])
def register_api(request, *args, **kwargs):
    data = json.loads(request.body)
    qs = User.objects.filter(username=data['username'])
    
    if qs.exists():
        return Response({'error': 'Username is already taken'}, status=400)
    
    qs = User.objects.filter(email=data['email'])
    
    if qs.exists():
        return Response({'error': 'Email is already in use'}, status=400)
    
    user = User.objects.create(username=data['username'], password=data['password'], email=data['email'])
    login(request._request, user)
    serializer = PublicProfileSerializer(instance=user.profile, context={"request": request})
    return Response(serializer.data)
    
    
    
    