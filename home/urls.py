from django.urls import path
from . import views
from .dash_app.finished_app import SimpleExample

urlpatterns = [
    path('', views.index, name = 'home'),
]
