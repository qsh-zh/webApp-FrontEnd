from django.urls import path
from . import views

app_name='frontApp'

urlpatterns = [
    path('',views.index)
]