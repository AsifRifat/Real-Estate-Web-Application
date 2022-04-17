from django.urls import path
from .views import FilterView

urlpatterns = [
    path('search', FilterView.as_view()),
]