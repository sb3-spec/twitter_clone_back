from django.conf import settings
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from django.contrib.auth import get_user_model

from urllib.parse import unquote

from ..models import Profile
from ..serializers import PublicProfileSerializer, ProfileEditSerializer

ALLOWED_HOSTS = settings.ALLOWED_HOSTS
User = get_user_model()


@api_view(['GET', 'POST'])
def follower_suggestions_api(request, *args, **kwargs):
    email = unquote(request.query_params.get('email'))
    user = User.objects.filter(email=email).first()
    
    if not user:
        return Response(status=404, message='User not found')
    profile = Profile.objects.filter(user=user).first()
    qs = Profile.objects.follow_suggester(profile)
    serializer = PublicProfileSerializer(qs, many=True)
    
    return Response(serializer.data)



@api_view(['POST'])
def follow_api(request, *args, **kwargs):
    user = get_user_by_username(request)
    if authenticate_user(user):
        return authenticate_user(user)
    targetUsername = request.data['targetUsername']
    print(targetUsername)
    targetProfileQs = Profile.objects.filter(user__username=targetUsername)
    print(targetProfileQs)
    targetProfile = targetProfileQs.first()
    is_following = user in targetProfile.followers.all()
    if is_following:
        targetProfile.followers.remove(user)
    else:
        targetProfile.followers.add(user)
        
    serializer = PublicProfileSerializer(targetProfile, context={"request": request})
    return Response(serializer.data)
            
            
@api_view(['GET', 'POST'])
def profile_detail_api_view(request, username, *args, **kwargs):
    user = get_user_by_username(request)
    if authenticate_user(user):
        return authenticate_user(user)
    
    qs = User.objects.filter(username=username)
    if not qs:
        return Response({"User not found"}, status=404)
    
    other_user = qs.first()
    profile = other_user.profile
        
    serializer = PublicProfileSerializer(profile, context={"request": request})
    return Response(serializer.data, status=200)

@api_view(['POST'])
def api_edit_profile(request, *args, **kwargs):
    user = get_user_by_username(request)
    data = request.data['editData'] 

    if not user:
        return Response({"error" : "User not found"}, status=400)

    new_username = data['username']
    new_email = data['email']
    new_first_name = data['firstName']
    new_last_name = data['lastName']
    new_bio = data['bio']
    new_location = data['location']
       
    profile = user.profile
    user.username = new_username
    print(new_first_name)
    user.email = new_email
    user.first_name = new_first_name
    user.last_name = new_last_name
    user.save()
    profile.bio = new_bio
    profile.location = new_location
    profile.save()
    profile_serializer = PublicProfileSerializer(profile)
    return Response(profile_serializer.data, status=200)

@api_view(['POST'])
def update_profile_pic_api(request, *args, **kwargs):
    if not get_user_by_username(request):
        return Response({"error": "user could not be found"}, status=400)
    
    profile = get_profile_by_username(request)
    index = request.data['index']
    if request.data['type'] == 'picture':
        profile.profile_picture = index
    else:
        profile.profile_banner = index
    profile.save()
    serializer = PublicProfileSerializer(instance=profile, context={"request": request})
    return Response(serializer.data)
    
    
    
    
@api_view(['GET', 'POST'])
def api_get_curr_profile(request, *args, **kwargs):
    user = get_user_by_username(request)
    if not user:
        return Response({"error": "user not found"})
    profile = user.profile
    serializer = PublicProfileSerializer(profile, context={"request": request._request})
    return Response(serializer.data, status=200)

def get_user_by_username(request):
    user = request.data['user']
    
    username = user['username']
    qs = User.objects.filter(username=username)
    if not qs.exists():
        return None
    return qs.first()

def get_profile_by_username(request):
    user = request.data['user']
    
    username = user['username']
    qs = Profile.objects.filter(user__username=username)
    if not qs.exists():
        return None
    return qs.first()


def authenticate_user(user):
    if user == None:
        return Response({"error": "User could not be found"}, status=400)
    
    # if not user.is_authenticated:
    #     return Response({"error": "Please log in"}, status=401)
    
    return None
