from django.shortcuts import render
from django.contrib.auth.decorators import login_required
# Create your views here.

@login_required
def cosmetic_list(request):
    products = CosmeticProduct.objects.all()
    return render(request, 'quiz/Cosmetic_Quiz.html', {'products': products})
    
def buy_cosmetic(request, pk):
    product = get_object_or_404(CosmeticProduct, pk=pk)
    return render(request, 'buy now/buy.html', {'product': product})