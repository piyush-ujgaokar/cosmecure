from django.shortcuts import render, redirect, get_object_or_404
from models import Product


# Create your views here.
def product_list(request, skin_type):
    products = Product.objects.filter(skin_type__iexact=skin_type)
    context = {'products': products, 'skin_type': skin_type}
    return render(request, 'skincare/normal.html', context)
