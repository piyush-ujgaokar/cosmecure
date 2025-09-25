from django.urls import path,include
from . import views

urlpatterns = [
    path('', views.home_view, name='home'),
    path('about/', views.about_view, name='about'),
    path('dashboard/', views.dashboard_view, name='dashboard'),
    path('',include('accounts.urls')),
    path('skincare/',include('skincare_quiz.urls')),
    path('knowmore/', views.knowmore_view, name='knowmore'),

    
]