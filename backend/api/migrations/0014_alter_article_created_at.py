# Generated by Django 4.1.3 on 2023-02-24 07:24

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0013_delete_adminuser'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='created_at',
            field=models.DateField(default=django.utils.timezone.now),
        ),
    ]