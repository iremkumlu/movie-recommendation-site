
from django.urls import path
from . import views


urlpatterns = [
    path('', views.index),
    path('index', views.index),
    path('contact', views.contact),
    path('favlist', views.favlist),
    path('about', views.about),
    
]
