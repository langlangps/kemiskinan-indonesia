from django.urls import path
from . import views
from .dash_app.finished_app import LineChart

urlpatterns = [
    path('', views.index, name = 'home'),
    path('test/', views.testing, name = 'testing'),
]
