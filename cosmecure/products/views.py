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
        if skin_type in template_map:
        template_name = template_map[skin_type]
        # You can pass context data to the template if needed
        context = {
            'skin_type_display': skin_type.capitalize()
        }
        return render(request, template_name, context)