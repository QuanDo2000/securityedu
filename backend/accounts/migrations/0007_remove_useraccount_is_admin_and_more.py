# Generated by Django 4.1.3 on 2023-02-24 07:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0006_alter_useraccount_is_admin'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='useraccount',
            name='is_admin',
        ),
        migrations.AlterField(
            model_name='useraccount',
            name='is_superuser',
            field=models.BooleanField(default=True),
        ),
    ]