from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Article
from .serializers import ArticleSerializer
# Create your views here.

@api_view(['GET'])
def listArticles(request):
   articles = Article.objects.all()
   serializer =  ArticleSerializer(articles, many=True)
   return Response(serializer.data)


@api_view(['GET'])
def getArticle(request):
   get_id = request.GET.get('id', '')
   article = Article.objects.get(id=get_id)
   serializer = ArticleSerializer(article)
   return Response(serializer.data)

@api_view(['GET'])
def getArticlesByCategory(request):
   get_category = request.GET.get('category', '')
   articles = Article.objects.filter(category=get_category)
   serializer = ArticleSerializer(articles, many=True)
   return Response(serializer.data)