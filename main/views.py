import os
import this
from django.shortcuts import render_to_response
from django.core import serializers
from django.utils import simplejson
from django.core.serializers.json import DjangoJSONEncoder, DateTimeAwareJSONEncoder
from django.http import HttpResponse
from django.contrib.auth import  login
from datetime import date
from django.db.models import Q

from poll.models import Poll
from question.models import Question

def index(request):
    return render_to_response('index.html')

def login(request):
    if request.POST:
        name = request.POST.get('name')
        result = {'success':True,  'name': name, 'pollTitle': '', 'questions': [], }
        
        polls = Poll.objects.all()
        if len(polls) > 0:
            poll = polls[0]
            result['pollTitle'] = poll.title
            questions = Question.objects.filter(poll = poll)
            
            for question in questions:
                result['questions'].append({'text': question.text, })
        
        data = simplejson.dumps(result, cls=DjangoJSONEncoder)
        return HttpResponse(data,mimetype="applicatipn/json")
    else:
        return HttpResponse('{success:false}',mimetype="application/json")