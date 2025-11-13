from django.shortcuts import render
from django.contrib.auth.decorators import login_required

# Create your views here.
def home_view(request):
    return render(request, 'home/home.html')

def about_view(request):
    return render(request, 'aboutus/about.html')

@login_required
def dashboard_view(request):
    return render(request, 'profile_system/profileSystem.html')

@login_required
def knowmore_view(request):
    return render(request, 'knowmore/knowmore.html')

def glam_view(request):
    return render(request, 'cosmetics/Glam.html')

def luminous_view(request):
    return render(request, 'cosmetics/Luminous.html')

def natural_view(request):
    return render(request, 'cosmetics/Natural.html')

