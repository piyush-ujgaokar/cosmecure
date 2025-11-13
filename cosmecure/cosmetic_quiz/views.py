from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
# Create your views here.

@login_required
def cosmetic_quiz(request):
    return render(request, 'quiz/Cosmetic_Quiz.html')
    
@require_http_methods(["POST"])
def quiz_result(request):
    data = json.loads(request.body)
    style = data.get('style', 'balanced').lower()
    
    # Map styles to templates
    style_templates = {
        'glam': '/cosmetic/glam/',
        'luminous': '/cosmetic/luminous/',
        'natural': '/cosmetic/natural/',
        'balanced': '/cosmetic/balanced/'
    }
    
    redirect_url = style_templates.get(style, '/cosmetic/balanced/')
    
    return JsonResponse({'redirect_url': redirect_url})

def glam_view(request):
    return render(request, 'quiz/Glam.html')

def luminous_view(request):
    return render(request, 'quiz/luminous.html')

def natural_view(request):
    return render(request, 'quiz/natural.html')

def balanced_view(request):
    return render(request, 'quiz/balanced.html')