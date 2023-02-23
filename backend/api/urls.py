from django.urls import path
from .views import listArticles, getArticle, getArticlesByCategory, submit

urlpatterns = [
    path('list', listArticles),
    path('getArticle', getArticle),
    path('getArticlesByCategory', getArticlesByCategory),
    path('submit', submit)
]
