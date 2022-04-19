from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import permissions
from .models import Realtor
from .serializers import RealtorSerializer

class RealtorListView(ListAPIView):
    """
    This class is used for retrieving the list of all realtors in database.
    """
    permission_classes = (permissions.AllowAny, )
    queryset = Realtor.objects.all()
    serializer_class = RealtorSerializer
    pagination_class = None

class RealtorView(RetrieveAPIView):
    """
    This class is used for retrieving a single realtor by id in database.
    """
    queryset = Realtor.objects.all()
    serializer_class = RealtorSerializer

class TopSellerView(ListAPIView):
    """
    This class is used for retrieving top seller realtor in database
    """
    permission_classes = (permissions.AllowAny, )
    queryset = Realtor.objects.filter(top_seller=True)
    serializer_class = RealtorSerializer
    pagination_class = None