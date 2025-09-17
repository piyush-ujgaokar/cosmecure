from django.urls import path
from . import views

urlpatterns = [
    path('process/', views.process_order, name='process_order'),
    path('order_confirmation/<uuid:order_id>/', views.order_confirmation, name='order_confirmation'),
]