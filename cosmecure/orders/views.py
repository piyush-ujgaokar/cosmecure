from django.shortcuts import render, redirect, get_object_or_404
from models import Order
# Create your views here.
def process_order(request):
    if 'product_name' in request.session and 'product_price' in request.session:
        product_name = request.session.get('product_name')
        product_price = request.session.get('product_price')