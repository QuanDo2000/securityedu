from django.contrib import admin
from api.models import Category, Article
from accounts.models import UserAccount

# Register your models here.
admin.site.register(Category)
admin.site.register(Article)
admin.site.register(UserAccount)