from django.http import HttpResponse
from django.shortcuts import render


def home_view(request):
    user_id = request.session.get('user_id')
    return render(request, 'home/home.html', {'user_id': user_id})

def about_view(request):
    return render(request, 'aboutus/about.html')