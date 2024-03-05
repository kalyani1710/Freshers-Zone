from django.shortcuts import render, HttpResponse

# Create your views here.

def index(request):
    return render(request, "index.html")

def date(request):
    return render(request , "date.html")

def packages(request):
    return render(request , "packages.html")

def package1(request):
    return render(request , "package1.html")

def package2(request):
    return render(request , "package2.html")

def package3(request):
    return render(request , "package3.html")

def package4(request):
    return render(request , "package4.html")


