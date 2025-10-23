from . import views
from django.urls import path

urlpatterns = [
path('cosmetics/', views.cosmetic_list, name='cosmetic_list'),
path('buy/<int:pk>/', views.buy_cosmetic, name='buy_cosmetic'),
]