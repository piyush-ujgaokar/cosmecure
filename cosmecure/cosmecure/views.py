from django.http import HttpResponse
from django.shortcuts import render


def home_view(request):
    if request.method == 'POST':
        return render(request, 'home/home.html')

def about_view(request):
    return render(request, 'aboutus/about.html')