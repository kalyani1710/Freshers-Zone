
from django.contrib import admin
from django.urls import path
from event import views

urlpatterns = [
    path("", views.index, name="home"),
    path("date/", views.date, name="date"),
    path("packages/", views.packages, name="packages"),
    path("package1/", views.package1, name="package1"),
    path("package2/", views.package2, name="package2"),
    path("package3/", views.package3, name="package3"),
    path("package4/", views.package4, name="package4"),
]
