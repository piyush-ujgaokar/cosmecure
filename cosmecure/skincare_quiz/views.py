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
        'combination': 'skincare/sub-page/combinational.html',
        'normal': 'skincare/sub-page/normal.html',
        }
    if skin_type in template_map:
        template_name = template_map[skin_type]
        context = {
        'skin_type_display': skin_type.capitalize()
        }
        return render(request, template_name, context)  
    raise Http404("Skin type not found")