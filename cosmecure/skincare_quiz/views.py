from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.http import Http404

# Create your views here.
@login_required
def skincare_quiz(request):
    return render(request, 'quiz/skincare_Quiz.html')

