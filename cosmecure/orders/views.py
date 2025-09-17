from django.shortcuts import render, redirect, get_object_or_404
from models import Order
# Create your views here.
def process_order(request):
    if 'product_name' in request.session and 'product_price' in request.session:
        product_name = request.session.get('product_name')
        product_price = request.session.get('product_price')

    order = Order.objects.create(
            product_name=product_name,
            product_price=float(product_price) # Convert price to float for storage
        )
    
    del request.session['product_name']
    del request.session['product_price']

    return redirect('order_confirmation', order_id=order.order_id)

    else:
        return redirect('normal')
def order_confirmation(request, order_id):
    order = get_object_or_404(Order, order_id=order_id)