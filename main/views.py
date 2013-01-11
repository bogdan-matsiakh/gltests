import os
import this
from django.shortcuts import render_to_response
from django.core import serializers
from django.http import HttpResponse
from django.contrib.auth import  login
from datetime import date
from django.db.models import Q

def index(request):
    #hello = os.path.join(os.path.dirname(__file__),'static')    
    return render_to_response('index.html')