from django.shortcuts import render

# Create your views here.

def buy_now_view(request):
    # Get product identifier from GET parameter
    product_key = request.GET.get('product', 'default')

    # Dictionary of products
    products = {
        'ahaglowFoam': {
            'name': 'Ahaglow\'s Foaming Face Wash',
            'description': 'Dermatologically recommended cleanser for effective skin exfoliation and rejuvenation.',
            'price': 899.00,
            'image_url': '../../../static/images/skincare/facewash/product-11.webp'
        },
        'default': {
            'name': 'HydraBoost Gel Cleanser',
            'description': 'For your Oily Skin',
            'price': 899.00,
            'image_url': 'https://via.placeholder.com/60'
        }
        # Add more products here as needed
    }

    # Get the product data, default to 'default' if not found
    product = products.get(product_key, products['default'])

    context = {
        'product': product
    }
    return render(request, 'buy now/buy.html', context)
