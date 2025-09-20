from django.shortcuts import render,redirect
from .models import users
from django.contrib import messages
from django.contrib.auth.hashers import make_password,check_password
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required


# Create your views here.
def signup_view(request):
    if request.method == 'POST':
        firstname = request.POST.get('FirstName')
        lastname = request.POST.get('LastName')
        email= request.POST.get('email')
        phone = request.POST.get('phone')
        password = request.POST.get('password')
        confirm_password = request.POST.get('confirmPassword')

        if password != confirm_password:
            messages.error(request, "Passwords do not match.")
            return redirect('signup')
        if users.objects.filter(phone=phone).exists():
            messages.error(request, "Phone number already registered.")
            return redirect('signup')
        if users.objects.filter(email=email).exists():
            messages.error(request, "Email already registered.")
            return redirect('signup')
    
        users.objects.create_user(#new instance of user,save it directly to db
            username=email,
            firstname=firstname,
            lastname=lastname,
            username=email,
            email=email,
            phone=phone,
            password=password
        )
        messages.success(request, "Signup successful! Please log in.")
        return redirect('login')
    return render(request, 'login & signup/signup.html')
def login_view(request):
    if request.method=='POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        user = authenticate(request, username=email, password=password)
        if user is not None:
            login(request, user)
            return redirect('profilesystem')
        else:
            messages.error(request, 'Invalid username or password')
    return render(request, 'login & signup/login.html')

@login_required # Protect this page so only logged-in users can see it
def profilesystem_view(request):
    return render(request, 'profile system/profileSystem.html')

