from django.shortcuts import render
from django.http import Http404

def skin_type_products(request, skin_type):
    # Define a map to link skin types to specific templates
    template_map = {
        'oily': 'products/oily_products.html',
        'dry': 'products/dry_products.html',
        'combination': 'products/combination_products.html',
        'normal': 'products/normal_products.html',
    }