from django.shortcuts import render
from django.contrib.auth.decorators import login_required
# Create your views here.

@login_required
def cosmetic_quiz(request):
    return render(request, 'quiz/Cosmetic_Quiz.html')