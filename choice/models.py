from django.db import models
from django.contrib import admin
from question.models import Question

# Create your models here.
class Choice(models.Model):
    text = models.TextField(max_length = 500)
    question = models.ForeignKey(Question)
    is_correct = models.BooleanField(default = False)
    
    def __unicode__(self):
        return self.text
    
admin.site.register(Choice)