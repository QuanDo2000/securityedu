from django.db import models
from django.utils.timezone import now
# Create your models here.



class Category(models.Model):
    name = models.CharField(max_length=200)

class Article(models.Model):
    title = models.CharField(max_length=200)
    created_at = models.DateField(auto_now=False, auto_now_add=False, default=now)
    category = models.ManyToManyField(Category)
    content = models.TextField(null=True)