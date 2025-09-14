from django.shortcuts import render,redirect
from .models import users
from django.contrib import messages
from django.contrib.auth.hashers import make_password,check_password


# Create your views here.
def signup_view(request):
    if request.method == 'POST':
        firstname = request.POST.get('Firstname')
        lastname = request.POST.get('Lastname')
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