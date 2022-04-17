from django.urls import path
from .views import ListingsView, ListingDetailView

urlpatterns = [
    path('', ListingsView.as_view()),
    path('<slug>', ListingDetailView.as_view()),
]