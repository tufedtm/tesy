from django.conf.urls import url, include
from django.contrib import admin
from rest_framework import routers

from snippets import views

router = routers.DefaultRouter()
router.register(r'snippets', views.SnippetViewSet)

urlpatterns = [
    # url(r'^', include(router.urls)),
    url(r'^', include('snippets.urls')),
    url(r'^api-auth/', include('rest_framework.urls')),
    url(r'^admin/', admin.site.urls),
]
