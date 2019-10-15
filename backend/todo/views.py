from django.shortcuts import render
from rest_framework import viewsets
from .serializers import LivreSerializer
from .models import Livre

# Create your views here.

class LivreView(viewsets.ModelViewSet):
    serializer_class = LivreSerializer
    queryset = Livre.objects.all()
