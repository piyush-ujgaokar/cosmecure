from django.urls import path
from . import views

urlpatterns = [
    path('<str:skin_type>/', views.skin_type_products, name='skin_type_products'),
]