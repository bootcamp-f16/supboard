from rest_framework import viewsets

from .models import Sup
from .serializers import SupSerializer

class SupViewSet(viewsets.ModelViewSet):
    queryset = Sup.objects.all().order_by('-created_date')
    serializer_class = SupSerializer
