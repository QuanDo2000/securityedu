from django.db import models
from datetime import date
# Create your models here.



class SubCategory(models.Model): 
    name = models.CharField(max_length=200)

class Category(models.Model):
    name = models.CharField(max_length=200)
    sub_category = models.ManyToManyField(SubCategory, blank=True)

class Article(models.Model):
    title = models.CharField(max_length=200)
    created_at = models.DateField(auto_now=False, auto_now_add=False, default=date.today())
    category = models.ManyToManyField(Category)
    content = models.TextField(null=True)