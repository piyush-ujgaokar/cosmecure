from django.shortcuts import render,redirect
from .models import users
from django.contrib import messages
from django.contrib.auth.hashers import make_password,check_password


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
        hashed_password = make_password(password)
        users.objects.create(#new instance of user,save it directly to db
            firstname=firstname,
            lastname=lastname,
            email=email,
            phone=phone,
            password=hashed_password
        )
        messages.success(request, "Signup successful! Please log in.")
        return redirect('login')
    return render(request, 'login & signup/signup.html')
def login_view(request):
    if request.method=='POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        try:
            user = users.objects.get(email=email)
            if check_password(password,user.password):
                request.session['user_id']=user.id
                messages.success(request, "Login successful!")
                return redirect('home')
            else:
                messages.error(request, "Invalid password.")
        except users.DoesNotExist:
            messages.error(request, "User does not exist.")
        return redirect('login')
    return render(request, 'login & signup/login.html')
            