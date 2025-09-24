from . import views
from django.urls import path




urlpatterns = [
path('skincare_quiz/', views.skincare_quiz, name='skincare_quiz'),
]