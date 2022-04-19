import unittest
from django.test import TestCase
from Contact.models import ContactModel
from django.contrib.auth.models import User

class ContactsModelTest(TestCase):

    def setUp(self):
        RealtortModel.objects.create(name='saad', email='as@hotmail.com', subject='hi' )
        RealtortModel.objects.create(name='nijhu',email='ss@hmail', subject='')

    def test_name(self):
        contact1 = ContacttModel.objects.get(messages)
        contact2 = ContactModel.objects.get(messages)
        self.assertEqual(contact1.name, 'saad')
        self.assertEqual(contact2.name, 'nijhu')

    def test_email(self):
        contact1 = ContacttModel.objects.get(messages)
        contact2 = ContactModel.objects.get(messages)
        self.assertEqual(contact1.email, 'as@hotmail.com')
        self.assertEqual(contact2.emai, 'ss@hmail')


    def test_subject(self):
        contact1 = ContacttModel.objects.get(messages)
        contact2 = ContactModel.objects.get(messages)
        self.assertEqual(contact1.subject, 'hi')
        self.assertEqual(contact2.subject, '')



    



    def test_name(self):
        contact1 = ContacttModel.objects.get(messages)
        contact2 = ContactModel.objects.get(messages)
        self.assertEqual(contact1.name, 'saad')
        self.assertEqual(contact2.name, 'nijhu')



    d
