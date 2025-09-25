from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.http import Http404

# Create your views here.
@login_required
def skincare_quiz(request):
    return render(request, 'quiz/skincare_Quiz.html')

def skin_type_products(request, skin_type):
    template_map = {
        'oily': 'skincare/sub-page/oily.html',
        'dry': 'skincare/sub-page/dry.html',
        'combination': 'skincare/sub-page/combination.html',
        'normal': 'skincare/sub-page/normal.html',
        }