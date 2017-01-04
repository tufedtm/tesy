from django.conf.urls import url, include
from django.contrib import admin
from rest_framework.routers import DefaultRouter

from snippets.views import SnippetViewSet, UserViewSet

router = DefaultRouter()
router.register(r'snippets', SnippetViewSet)
router.register(r'users', UserViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls')),
    url(r'^admin/', admin.site.urls),
]
