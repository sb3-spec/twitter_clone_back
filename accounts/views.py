from django.shortcuts import render, redirect
from django.contrib.auth import login, logout, get_user_model
from rest_framework.response import Response
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm
# Create your views here.

User = get_user_model()
def login_view(request, *args, **kwargs):
    form = AuthenticationForm(request, data=request.POST or None)
    if form.is_valid():
        user = form.get_user()
        login(request, user)
        return redirect("/")

    context = {
        "form": form,
        "btn_label": "Login", 
        "title": "Login",
    }
    return render(request, "accounts/auth.html", context)

def logout_view(request, *args, **kwargs):
    if request.method == "POST":
        logout(request)
        return redirect("/login")
    context = {
        'form': None,
        "description": "Are you sure you want to logout?",
        'btn_label': 'Logout?',
        'title': "Logout"
    }
    return render(request, "accounts/auth.html", context)


def register_view(request, *args, **kwargs):
    form = UserCreationForm(request.POST or None)
    if form.is_valid():
        user = form.save(commit=True)
        user.set_password(form.cleaned_data.get("password1"))
        login(request, user)
        return redirect("/")
    
    context = {
        'form': form,
        'btn_label': 'Register',
        'title': "Register"
    }
    return render(request, "accounts/auth.html", context)





