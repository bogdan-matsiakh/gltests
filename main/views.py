import os
import this
from django.shortcuts import render_to_response
from django.core import serializers
from django.utils import simplejson
from django.core.serializers.json import DjangoJSONEncoder, DateTimeAwareJSONEncoder
from django.http import HttpResponse
from django.db.models import Q

from poll.models import Poll
from question.models import Question
from main.models import Profile

def index(request):
    return render_to_response('index.html')

def result(request):
    return render_to_response('result.html')

def login(request):
    if request.POST:
        name = request.POST.get('name')
        profile = Profile.objects.create(name = name)
        print 'profile'
        print profile
        result = {'success':True,  'name': name, 'pollTitle': '', 'questions': [], }
        
        polls = Poll.objects.all()
        if len(polls) > 0:
            poll = polls[0]
            result['pollTitle'] = poll.title
            questions = Question.objects.filter(poll = poll)
            
            for question in questions:
                result['questions'].append({'text': question.text, 'id': question.id, })
        
        data = simplejson.dumps(result, cls=DjangoJSONEncoder)
        response = HttpResponse(data,mimetype="applicatipn/json")
        response.set_cookie('id', profile.id)
        return response
    else:
        return HttpResponse('{success:false}',mimetype="application/json")