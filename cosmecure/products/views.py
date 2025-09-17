from django.shortcuts import render, redirect


# Create your views here.
def normal_skincare(request):
    return render(request, 'skincare/normal.html')
