from django.db import models
from django.contrib import admin

# Create your models here.
class Profile(models.Model):
    name = models.CharField(max_length = 20)
    correct = models.IntegerField(default = 0)
    
    def __unicode__(self):
        return self.name
    
admin.site.register(Profile)