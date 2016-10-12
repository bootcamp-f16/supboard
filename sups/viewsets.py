from rest_framework import viewsets

from .models import Sup
from .serializers import SupSerializer

class SupViewSet(viewsets.ModelViewSet):
    queryset = Sup.objects.all()
    serializer_class = SupSerializer
