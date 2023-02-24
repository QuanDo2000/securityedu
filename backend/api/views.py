from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Article, Category
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

@api_view(['POST'])
def submit(request):
   data = request.POST
   article = Article()
   article.title = data.get('title')
   article.content = data.get('content')
   article.save() 
   for i in data.get('category').split(', '):
      if len(Category.objects.filter(name=i)) == 0:
         new_category = Category(name=i)
         new_category.save()
         article.category.add(new_category.id)
         article.save()
      else:
         old_category = Category.objects.get(name=i)
         article.category.add(old_category.id)
         article.save()
   return Response('Update success', status=status.HTTP_200_OK)
