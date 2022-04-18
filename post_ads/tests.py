from django.test import TestCase
from django import setup
import unittest
import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'real_estate.settings')
setup()

# Create your tests here.
from .models import Listing

class ListingTestCase(TestCase):
    def test_queryset_exists(self):
        qs = Listing.objects.all()
        self.assertTrue(qs.exists())