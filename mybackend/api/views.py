from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework import status

def index(request):
    return render(request, 'index.html')

class TestView(APIView):
    def get(self, request):
        return Response({'message': 'The backend sent me and you caught me.'}, status=status.HTTP_200_OK)