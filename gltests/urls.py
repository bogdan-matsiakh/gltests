from django.conf.urls import patterns, include, url

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()
from main import views
from poll import views
from question import views
from choice import views

urlpatterns = patterns('',
    # Examples:
    url(r'^$', 'main.views.index'),
    url(r'^result$', 'main.views.result'),
    url(r'^login$', 'main.views.login'),
    # url(r'^gltests/', include('gltests.foo.urls')),
    
    url(r'^question$', 'question.views.get'),
    url(r'^submit$', 'question.views.submit'),

    # Uncomment the admin/doc line below to enable admin documentation:
    url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    url(r'^admin/', include(admin.site.urls)),
)
