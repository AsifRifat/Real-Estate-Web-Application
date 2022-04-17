from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import permissions
from .models import Listing
from .serializers import ListingSerializer, ListingDetailSerializer
from datetime import datetime, timezone, timedelta

class ListingsView(ListAPIView):
    """
    This class allow user to view posted ads ordered by published dates
    without any authentication

    :param ListAPIView:
    """
    queryset = Listing.objects.order_by('-list_date').filter(is_published=True)
    permission_classes = (permissions.AllowAny, )
    serializer_class = ListingSerializer
    lookup_field = 'slug'

class ListingDetailView(RetrieveAPIView):
    """
    This class allow user to view deatails of posted ads ordered by published dates
    which need to be authenticated.

    :param RetrieveAPIView:
    """
    queryset = Listing.objects.order_by('-list_date').filter(is_published=True)
    serializer_class = ListingDetailSerializer
    lookup_field = 'slug'
