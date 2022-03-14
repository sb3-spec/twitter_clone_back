from django.shortcuts import render
from .models import Profile
from django.shortcuts import render, redirect

# Create your views here.
from .forms import ProfileForm

def profile_update_view(request, *args, **kwargs):
    user = request.user
    if not user.is_authenticated:
        return redirect('/login?next=/profile/update')
    
    user_data = {
        "first_name": user.first_name,
        "last_name": user.last_name,
        "email": user.email
    }
    
    
    my_profile = user.profile
    
    form = ProfileForm(request.POST or None, instance=my_profile)
    if form.is_valid():
        profile_obj = form.save()
        first_name = form.cleaned_data.get('first_name')
        last_name = form.cleaned_data.get('last_name')
        email = form.cleaned_data.get('email')
        user.first_name = first_name
        user.last_name = last_name
        user.email = email
        user.save()
        profile_obj.save()
    
    context = {
        "form": form,
        "btn_label": "Save",
        "title": "Update Profile"
    }
    
    return render(request, "profiles/form.html", context)

def profile_detail_view(request, username, *args, **kwargs):
    qs = Profile.objects.filter(user__username=username)
    is_following = False
    profile_obj = qs.first()
    if request.user.is_authenticated:
        user = request.user
        is_following = user in profile_obj.followers.all()
    context = {
        "username": username,
        "profile": profile_obj,
        "is_following": is_following
    }
    
    return render(request, 'profiles/detail.html', context)