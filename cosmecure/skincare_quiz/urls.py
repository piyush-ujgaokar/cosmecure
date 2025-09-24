from . import views
from django.urls import path
from django.contrib.auth.decorators import login_required



urlpatterns = [
path('skincare_quiz/', views.skincare_quiz, name='skincare_quiz'),
]