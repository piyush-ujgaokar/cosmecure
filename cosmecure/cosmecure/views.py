from django.http import HttpResponse
from django.shortcuts import render, redirect


def home_view(request):
    return render(request, 'home/home.html')

def about_view(request):
    return render(request, 'aboutus/about.html')

def skin_quiz_view(request):
    return render(request, 'quiz/skincare_Quiz.html')

