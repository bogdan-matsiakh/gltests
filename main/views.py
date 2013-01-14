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

def index(request):
    return render_to_response('index.html')

def login(request):
    print request 
    if request.POST:
        data = request.POST
        name = data.get('name')
        print name
        result = {'success':True,  'name': name, }
        import simplejson as json
        data = json.dumps(result, cls=DjangoJSONEncoder)
        return HttpResponse(data,mimetype="applicatipn/json")
    else:
        return HttpResponse('{success:false}',mimetype="application/json")