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

def buy_now_view(request):
    # You will need to fetch the product from the database here
    # For now, we'll use a placeholder
    product = {
        'name': 'HydraBoost Gel Cleanser',
        'description': 'For your Oily Skin',
        'price': 899.00,
        'image_url': 'https://via.placeholder.com/60'
    }
    context = {
        'product': product
    }
    return render(request, 'buy now/buy.html', context)
