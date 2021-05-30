from django.urls import path
from . import views
from .dash_app.finished_app import LineChart

app_name = "kemiskinan_indonesia";

urlpatterns = [
    path('', views.index, name = 'home'),
    path('test/', views.testing, name = 'testing'),
    path('contact_us/', views.contact_us, name = 'contact_us'),
]
