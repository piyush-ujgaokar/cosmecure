from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate, logout
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth.models import User
from .models import Profile
from django.contrib.auth.decorators import login_required

def signup_view(request):
    context = {} # This will hold any error messages

    if request.method == 'POST':
        # Get data directly from your HTML form's 'name' attributes
        first_name = request.POST.get('FirstName')
        last_name = request.POST.get('LastName')
        email = request.POST.get('email')
        phone_number = request.POST.get('phone') # 'name' is 'phone' in your HTML
        password = request.POST.get('password')
        confirm_password = request.POST.get('confirmPassword')

        # --- Perform Manual Validation ---
        if password != confirm_password:
            context['error'] = 'The two password fields did not match.'
            return render(request, 'login & signup/signup.html', context)

        if User.objects.filter(email=email).exists():
            context['error'] = 'This email address is already in use.'
            return render(request, 'login & signup/signup.html', context)

        # If validation is successful, create the user
        user = User.objects.create_user(
            username=email, # Use the email as the username for login
            email=email,
            password=password,
            first_name=first_name,
            last_name=last_name
        )
        
        # Create the associated profile with the phone number
        profile = Profile(user=user, phone_number=phone_number)
        profile.save()

        # Redirect to the login page on success
        return redirect('login')

    return render(request, 'login & signup/signup.html', context)


# For security, we still use Django's built-in AuthenticationForm for login
def login_view(request):
    if request.method == 'POST':
        # The AuthenticationForm handles all login validation securely
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect('dashboard') # Redirect to dashboard after login
    else:
        form = AuthenticationForm()
    return render(request, 'login & signup/login.html', {'form': form})
    
@login_required
def profileinfo_view(request):
    return render(request, 'profile_system/profileInformation.html', context)



def logout_view(request):
    logout(request)
    return redirect('login') 

