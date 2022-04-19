from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import permissions
from .models import Listing
from .serializers import ListingSerializer, listingDetailSerializer
from datetime import datetime, timezone, timedelta

class ListingsView(ListAPIView):
    """
    This class helps the users to view property listings. If the filtered conditions are true then this class will take the user to a page where he/she can view property listings according to his/her given choice. But he/she will only be able to see details if she/he has an account.
    :param ListAPIView: _description_
    :type ListAPIView:
    """
    queryset = Listing.objects.order_by('-list_date').filter(is_published=True)
    permission_classes = (permissions.AllowAny, )
    serializer_class = ListingSerializer
    lookup_field = 'slug'

class ListingView(RetrieveAPIView):
    """
    This class helps the users to view property listings with details. This class will check if the user has an account or not and if the condition is true , the user can view the listings with all its details.
    :param ListAPIView: _description_
    :type ListAPIView:
    """
    queryset = Listing.objects.order_by('-list_date').filter(is_published=True)
    serializer_class = listingDetailSerializer
    lookup_field = 'slug'
