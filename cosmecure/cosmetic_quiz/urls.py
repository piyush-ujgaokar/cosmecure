from . import views
from django.urls import path

urlpatterns = [
path('cosmetic_quiz', views.cosmetic_quiz, name='cosmetic_quiz'),

]