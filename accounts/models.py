from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

class UserAccountManager(BaseUserManager):
    """
    This class is responsible for creating all types of user accounts.
    """
    def create_user(self, email, name, password=None):
        """
        This function is responsible for creating normal users.

        :param email: email id
        :type email: string
        :param name: username
        :type name: string
        :param password: account password, defaults to None
        :type password: string, optional
        :raises ValueError: if email id is not entered
        :return: list of user's name, email, password
        :rtype: user object
        """
        if not email:
            raise ValueError('Users must have an email address')
        
        email = self.normalize_email(email)
        user = self.model(email=email, name=name)

        user.set_password(password)
        user.save()

        return user
    
    def create_superuser(self, email, name, password):
        """
        This function is responsible for creating admin superuser.

        :param email: email id
        :type email: string
        :param name: admin name
        :type name: string
        :param password: account password
        :type password: string
        :return: list of user's name, email, password
        :rtype: user object
        """
        user = self.create_user(email, name, password)

        user.is_superuser = True
        user.is_staff = True
        user.save()

        return user

class UserAccount(AbstractBaseUser, PermissionsMixin):
    """
    Class that is used to create database models for the custom users.

    """
    email = models.EmailField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)

    objects = UserAccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name']

    def get_full_name(self):
        """
        Function that returns string representation of user full name.

        """
        return self.name
    
    def get_short_name(self):
        """
        Function that returns string representation of user name.

        """
        return self.name
    
    def __str__(self):
        """
        Function that returns string representation of user email.

        """
        return self.email