from django.urls import path
from .views import listArticles, getArticle, getArticlesByCategory

urlpatterns = [
    path('list', listArticles),
    path('getArticle', getArticle),
    path('getArticlesByCategory', getArticlesByCategory)
]
