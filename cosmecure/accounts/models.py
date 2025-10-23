from django.db import models
from django.contrib.auth.models import User

class Profile(models.Model):
    # Creates a one-to-one link with Django's built-in User model
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    # Field to store the phone number
    phone_number = models.CharField(max_length=15, blank=True)

    def __str__(self):
        return f'{self.user.username} Profile'

