from django.shortcuts import render
from django.contrib.auth.decorators import login_required
# Create your views here.

@login_required
def cosmetic_list(request):
    products = CosmeticProduct.objects.all()
    return render(request, 'quiz/Cosmetic_Quiz.html', {'products': products})
    