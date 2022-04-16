from rest_framework import serializers
from .models import Realtor

class RealtorSerializer(serializers.ModelSerializer):
    """
    This class provides a shortcut that creates a Serializer class with fields
    that correspond to the Model fields.

    """
    class Meta:
        model = Realtor
        fields = '__all__'