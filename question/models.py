from django.db import models
from django.contrib import admin
from poll.models import Poll

# Create your models here.
class Question(models.Model):
    text = models.TextField(max_length = 500)
    poll = models.ForeignKey(Poll)
    
    def __unicode__(self):
        return self.text
    
admin.site.register(Question)