import unittest
from django.test import TestCase
from Realtors.models import RealtortModel
from django.contrib.auth.models import User

class RealtorModelTest(TestCase):

    def setUp(self):
        RealtortModel.objects.create(name='saad', description='asdasdasd asdasfdsfjks', phone='00000000000000', email='sdfg', top_seller='alvee', date_hired='12/12/1234')
        RealtortModel.objects.create(name='nijhu', description='', phone='8887795', email='ss@hmail.com', top_seller='san', date_hired='12/12/123')

    def test_name(self):
        realtor1 = RealtortModel.objects.get(realtor_id=1)
        realtor2 = RealtortModel.objects.get(realtor_id=2)
        self.assertEqual(realtor1.name, 'saad')
        self.assertEqual(realtor2.name, 'nijhu')

    def test_description(self):
        realtor1 = RealtortModel.objects.get(realtor_id=1)
        realtor2 = RealtortModel.objects.get(realtor_id=2)
        self.assertEqual(realtor1.description, 'asdasdasd')
        self.assertEqual(realtor2.description, '')

    def test_phone(self):
        realtor1 = RealtortModel.objects.get(realtor_id=1)
        realtor2 = RealtortModel.objects.get(realtor_id=2)
        self.assertEqual(realtor1.phone, '8887795')
        self.assertEqual(realtor2.phone, '00000000000000')


    def test_email(self):
        realtor1 = RealtortModel.objects.get(realtor_id=1)
        realtor2 = RealtortModel.objects.get(realtor_id=2)
        self.assertEqual(realtor1.email, 'sdfg')
        self.assertEqual(realtor2.email, 'ss@hmail.com')


    def test_top_seller(self):
        realtor1 = RealtortModel.objects.get(realtor_id=1)
        realtor2 = RealtortModel.objects.get(realtor_id=2)
        self.assertEqual(realtor1.top_seller, 'alvee')
        self.assertEqual(realtor2.top_seller, 'san')


    def test_date_hired(self):
        realtor1 = RealtortModel.objects.get(realtor_id=1)
        realtor2 = RealtortModel.objects.get(realtor_id=2)
        self.assertEqual(realtor1.date_hired, '12/12/1234')
        self.assertEqual(realtor2.date_hired, '12/12/123')

