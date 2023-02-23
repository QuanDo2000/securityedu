import django
import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

import git
from api.models import Article, Category


def getSample(fol):
    categories = {
        '1': 'pcs/laptops', 
        '2': 'mobile', 
        '3': 'enterprises', 
        '4': 'web attacks', 
        '5': 'active directory', 
        '6': 'enumeration', 
        '7': 'post exploitation',
        '8': 'command injection', 
        '9': 'idor',
        '10': 'lfi',
        '11': 'sql injection'
    }
    return Category.objects.get(name=categories.get(fol))

def getTitle(file):
    removeUnderscore = file.replace('_', ' ')
    final = removeUnderscore.replace('.md', '')
    if final == 'iphone ipad':
        final = final[:7] + '+ ' + final[7:]
    return final

docs = '/home/mcchuu/Documents/securityedu/docs' #replace with your docs path
repo = '/home/mcchuu/Documents/securityedu' #replace with your repo path
my_repo = git.Repo(repo)
o = my_repo.remotes.origin
o.pull('main')

for folder in os.listdir(docs):
    fol = os.path.join(docs, folder)
    for file in os.listdir(fol):
        content = os.path.join(fol, file)
        content = open(content, 'r')
        content = content.read()
        sample = getSample(folder)
        final = getTitle(file)
        articles = Article.objects.filter(title=final.title())
        if (len(articles) == 0):
            new_article = Article(title=final.title(), content=content)
            new_article.save()
            new_article.category.add(sample)
            new_article.save()
        
        