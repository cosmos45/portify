from django.urls import path
from . import views
from .views import TestView

app_name = 'api'

urlpatterns = [
    path('',views.index,name='index'),
    path('test/', TestView.as_view(), name='test')
]