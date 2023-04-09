import django
import os
import io
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

import git
from api.models import Article, Category


def getSample(fol):
    categories = {
        '1': 'pcs/laptops', 
        '2': 'mobile', 
        '3': 'enterprises', 
    }
    return Category.objects.get(name=categories.get(fol))

def getTitle(file):
    removeUnderscore = file.replace('_', ' ')
    final = removeUnderscore.replace('.md', '')
    if final == 'iphone ipad':
        final = final[:7] + '+ ' + final[7:]
    return final

docs = '/home/mcchuu/nhatle/securityedu/docs' #replace with your docs path
repo = '/home/mcchuu/nhatle/securityedu' #replace with your repo path
my_repo = git.Repo(repo)
o = my_repo.remotes.origin
o.pull('main')

for folder in os.listdir(docs):
    fol = os.path.join(docs, folder)
    for (dir_path, dir_names, file_names) in os.walk(fol):
        for file in file_names:
            extension = os.path.splitext(file)[1]
            if extension != '.md':
                continue
            content = os.path.join(dir_path, file)
            content = io.open(content, mode='r', encoding='latin-1')
            content = content.read()
            sample = getSample(folder)
            final = getTitle(file)
            articles = Article.objects.filter(title=final.title())
            if (len(articles) == 0):
                new_article = Article(title=final.title(), content=content)
                new_article.save()
                new_article.category.add(sample)
                new_article.save()
        
        