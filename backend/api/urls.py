from django.urls import path
from .views import listArticles

urlpatterns = [
    path('list', listArticles)
]
