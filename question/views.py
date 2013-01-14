import os
import this
from django.shortcuts import render_to_response
from django.core import serializers
from django.utils import simplejson
from django.core.serializers.json import DjangoJSONEncoder, DateTimeAwareJSONEncoder
from django.http import HttpResponse
from django.db.models import Q

from models import Question

def get(request):
    if request.POST:
        id = request.POST.get('id')
        question = Question.objects.get(id = id)
        result = {'success':True,  'id': id, 'text': question.text,  }
        
        data = simplejson.dumps(result, cls=DjangoJSONEncoder)
        return HttpResponse(data,mimetype="applicatipn/json")
    else:
        return HttpResponse('{success:false}',mimetype="application/json")