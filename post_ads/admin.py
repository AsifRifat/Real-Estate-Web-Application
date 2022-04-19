from django.contrib import admin
from .models import Listing

class ListingAdmin(admin.ModelAdmin):
    """
    This class shows the list of ads owned by realtors in admin portal.
    The posted listings are editable.

    :param admin: administartor
    """
    list_display = ('id', 'title', 'is_published', 'price', 'list_date', 'realtor')
    list_display_links = ('id', 'title')
    list_filter = ('realtor', )
    list_editable = ('is_published', )
    search_fields = ('title', 'description', 'address', 'city', 'state', 'postcode', 'price')
    list_per_page = 25

admin.site.register(Listing, ListingAdmin)