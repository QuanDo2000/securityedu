from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin


class UserAccountManager(BaseUserManager):
    def create_superuser(self, username, password=None):
        if not username:
            raise ValueError('Must have an username')
        
        user = self.model(username=username)
        user.set_password(password)
        user.is_superuser = True
        user.save()

        return user

class UserAccount(AbstractBaseUser, PermissionsMixin):
    username = models.CharField(max_length=200, unique=True)
    password = models.CharField(max_length=200)
    is_superuser = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=True)

    objects = UserAccountManager()

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = []