from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth.models import User
from .models import Profile
from django.contrib.auth.decorators import login_required

def signup_view(request):
    context = {} 

    if request.method == 'POST':
        first_name = request.POST.get('FirstName')
        last_name = request.POST.get('LastName')
        email = request.POST.get('email')
        phone_number = request.POST.get('phone') 
        password = request.POST.get('password')
        confirm_password = request.POST.get('confirmPassword')

        if password != confirm_password:
            context['error'] = 'The two password fields did not match.'
            return render(request, 'login & signup/signup.html', context)

        if User.objects.filter(email=email).exists():
            context['error'] = 'This email address is already in use.'
            return render(request, 'login & signup/signup.html', context)

        
        user = User.objects.create_user(
            username=email, 
            email=email,
            password=password,
            first_name=first_name,
            last_name=last_name
        )
        
    
        profile = Profile(user=user, phone_number=phone_number)
        profile.save()

        
        return redirect('login')

    return render(request, 'login & signup/signup.html', context)

def login_view(request):
    if request.method == 'POST':
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect('dashboard') 
    else:
        form = AuthenticationForm()
    return render(request, 'login & signup/login.html', {'form': form})

@login_required
def profileinfo_view(request):
    user = request.user
    try:
        profile = user.profile
    except Profile.DoesNotExist:
        profile = Profile.objects.create(user=user)

    context = {
        'user': user,
        'profile': profile,
        'email': user.email,
        'phone': profile.phone_number,
        'name': user.get_full_name()
    }
    return render(request, 'profile_system/profileInformation.html', context)



def logout_view(request):
    logout(request)
    return redirect('login') 

