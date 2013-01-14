from django.db import models
from django.contrib import admin

# Create your models here.
class Poll(models.Model):
    title=models.CharField(max_length=200)
    
    def __unicode__(self):
        return self.title
    
admin.site.register(Poll)