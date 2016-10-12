from django.conf.urls import include, url
from rest_framework import routers

from sups.viewsets import SupViewSet

router = routers.DefaultRouter()
router.register(r'sups', SupViewSet)

urlpatterns = [
    url(r'^', include(router.urls)), 
]