import unittest
from django.test import TestCase
from Search.models import SearchModel 
from django.contrib.auth.models import User


class SearchModelTest(TestCase):

    def setUp(self):
        SearchModel .objects.create( title='asdsd', address='asdasd44', city='Dhaka', state='Dhaka', zipcode= '2500', description= 'asdasdasd', sale_type= 'asd', price= '25000000', bedrooms= '29',)
        SearchModel .objects.create( title='', address='3asdasd', city='789', state='', zipcode= '002', description= '', sale_type= '', price= '000', bedrooms= '3',)

    def test_location(self):
        search1 = SearchModel.objects.get(realtors=1)
        search2 = SearchModel.objects.get(realtors=2)
        self.assertEqual(search1.title, 'asdsd')
        self.assertEqual(search2.title, '')

    def test_location(self):
        search1 = SearchModel.objects.get(realtors=1)
        search2 = SearchModel.objects.get(realtors=2)
        self.assertEqual(search1.address, 'asdasd44')
        self.assertEqual(search2.address, '3asdasd')

    def test_location(self):
        search1 = SearchModel.objects.get(realtors=1)
        search2 = SearchModel.objects.get(realtors=2)
        self.assertEqual(search1.city, 'dhaka')
        self.assertEqual(search2.city, '789')
    
    def test_location(self):
        search1 = SearchModel.objects.get(realtors=1)
        search2 = SearchModel.objects.get(realtors=2)
        self.assertEqual(search1.state, 'dhaka')
        self.assertEqual(search2.state, '')

    def test_location(self):
        search1 = SearchModel.objects.get(realtors=1)
        search2 = SearchModel.objects.get(realtors=2)
        self.assertEqual(search1.zipcode, '2500')
        self.assertEqual(search2.zipcode, '002')

    def test_location(self):
        search1 = SearchModel.objects.get(realtors=1)
        search2 = SearchModel.objects.get(realtors=2)
        self.assertEqual(search1.description, 'asdasdasd')
        self.assertEqual(search2.description, '')

    def test_location(self):
        search1 = SearchModel.objects.get(realtors=1)
        search2 = SearchModel.objects.get(realtors=2)
        self.assertEqual(search1.price, '25000000')
        self.assertEqual(search2.location, '000')

    def test_location(self):
        search1 = SearchModel.objects.get(realtors=1)
        search2 = SearchModel.objects.get(realtors=2)
        self.assertEqual(search1.bedrooms, '29')
        self.assertEqual(search2.bedrooms, '3')
