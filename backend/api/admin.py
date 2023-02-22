from django.contrib import admin
from .models import Category, Article, SubCategory

# Register your models here.
admin.site.register(Category)
admin.site.register(Article)
admin.site.register(SubCategory)