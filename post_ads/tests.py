import unittest
from django.test import TestCase
from django import setup
import os
from .models import Listing
from realtors.models import Realtor
from .views import ListingsView
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'real_estate.settings')
setup()

class ListingTest(TestCase):
    """
    This class is for testing post_ads models functioning properly.

    :param TestCase:
    """
    def test_setUp(self):
        """
        This function creates two listing objects for testing.
        """
        Listing.objects.create(realtor = 'Mr B',slug = 'lucrative-apartment-in-Banani',
        title = '2000sqft-apartment-in-Banani',address = '34, Banani',city = 'Dhaka',
        sale_type = 'For Rent', price = 27000, bedrooms = 3,bathrooms = 2,
        home_type = 'Apartment',sqft = 2000)

        Listing.objects.create(realtor = 'Mr C',slug = 'cheap-plot-in-Uttara',
        title = '3-katha-plot-in-Uttara',address = '13/A, Uttara',city = 'Dhaka',
        sale_type = 'For Sale', price = 18900000, home_type = 'Plot')

    def test_address(self):
        """
        This function tests whether created post returns corresponding address.
        """
        post1 = Listing.objects.get(id=1)
        post2 = Listing.objects.get(id=2)
        self.assertEqual(post1.address, '34, Banani')
        self.assertEqual(post2.address, '13/A, Uttara')

    def test_price(self):
        """
        This function tests whether created post returns corresponding price of property/rent.
        """
        post1 = Listing.objects.get(id=1)
        post2 = Listing.objects.get(id=2)
        self.assertEqual(post1.price, 27000)
        self.assertEqual(post2.price, 18900000)

if __name__ == '__main__':
   unittest.main()
        

    