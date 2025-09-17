from django.urls import path
from . import views

urlpatterns = [
    path('process/', views.process_order, name='process_order'),