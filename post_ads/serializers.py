from rest_framework import serializers
from .models import Listing

class ListingSerializer(serializers.ModelSerializer):
    """
    Reterns specific set of fileds of listing in views.py
    """
    class Meta:
        model = Listing
        fields = ('title', 'address', 'city', 'state', 'price', 'sale_type', 'home_type', 'bedrooms', 'bathrooms', 'sqft', 'photo_main', 'slug')

class ListingDetailSerializer(serializers.ModelSerializer):
    """
    Retern all of the fields of listing in views.py
    """
    class Meta:
        model = Listing
        fields = '__all__'
        lookup_field = 'slug'
