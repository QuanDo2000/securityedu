# Generated by Django 4.1.3 on 2022-11-09 02:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_article_content'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='article',
            name='url',
        ),
    ]
