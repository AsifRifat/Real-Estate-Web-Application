from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import permissions
from .models import Listing
from .serializers import ListingSerializer
from datetime import datetime, timezone, timedelta

class FilterView(APIView):
    """
    This class performs filtering opertion based on some criterias such as sale_type,
    price, no of bedrooms, no of bathrooms, area of the property, posted date e.t.c.
    
    :param APIView: APIView
    :type APIView: url response
    """
    permission_classes = (permissions.AllowAny, )
    serializer_class = ListingSerializer

    def post(self, request, format=None):
        """
        This function allows to post request filtered listings.

        :param request: request
        :type request: object
        :param format: defaults to None
        :type format: optional
        :return: query set of filtered listings
        :rtype: json
        """
        queryset = Listing.objects.order_by('-list_date').filter(is_published=True)
        data = self.request.data

        sale_type = data['sale_type']
        queryset = queryset.filter(sale_type__iexact=sale_type)

        price = data['price']
        if price == 'BDT0+':
            price = 0
        elif price == 'BDT5000+':
            price = 5000
        elif price == 'BDT10000+':
            price = 10000
        elif price == 'BDT15000+':
            price = 15000
        elif price == 'BDT20000+':
            price = 20000
        elif price == 'BDT25000+':
            price = 25000
        elif price == 'BDT30000+':
            price = 30000
        elif price == 'BDT50000+':
            price = 50000
        elif price == 'BDT70000+':
            price = 70000
        elif price == 'BDT100000+':
            price = 100000
        elif price == 'Any':
            price = -1
        
        if price != -1:
            queryset = queryset.filter(price__gte=price)
        
        bedrooms = data['bedrooms']
        if bedrooms == '0+':
            bedrooms = 0
        elif bedrooms == '1+':
            bedrooms = 1
        elif bedrooms == '2+':
            bedrooms = 2
        elif bedrooms == '3+':
            bedrooms = 3
        elif bedrooms == '4+':
            bedrooms = 4
        elif bedrooms == '5+':
            bedrooms = 5
        
        queryset = queryset.filter(bedrooms__gte=bedrooms)

        home_type = data['home_type']
        queryset = queryset.filter(home_type__iexact=home_type)

        bathrooms = data['bathrooms']
        if bathrooms == '0+':
            bathrooms = 0
        elif bathrooms == '1+':
            bathrooms = 1
        elif bathrooms == '2+':
            bathrooms = 2
        elif bathrooms == '3+':
            bathrooms = 3
        elif bathrooms == '4+':
            bathrooms = 4
        
        queryset = queryset.filter(bathrooms__gte=bathrooms)

        sqft = data['sqft']
        if sqft == '500+':
            sqft = 500
        elif sqft == '1000+':
            sqft = 1000
        elif sqft == '1200+':
            sqft = 1200
        elif sqft == '1500+':
            sqft = 1500
        elif sqft == '2000+':
            sqft = 2000
        elif sqft == 'Any':
            sqft = -1
        
        if sqft != -1:
            queryset = queryset.filter(sqft__gte=sqft)
        
        days_passed = data['days_listed']
        if days_passed == '1 or less':
            days_passed = 1
        elif days_passed == '2 or less':
            days_passed = 2
        elif days_passed == '5 or less':
            days_passed = 5
        elif days_passed == '10 or less':
            days_passed = 10
        elif days_passed == '20 or less':
            days_passed = 20
        elif days_passed == 'Any':
            days_passed = 0
        
        for query in queryset:
            num_days = (datetime.now(timezone.utc) - query.list_date).days

            if days_passed != 0:
                if num_days > days_passed:
                    slug=query.slug
                    queryset = queryset.exclude(slug__iexact=slug)
        
        has_photos = data['has_photos']
        if has_photos == '1+':
            has_photos = 1
        elif has_photos == '3+':
            has_photos = 3
        elif has_photos == '5+':
            has_photos = 5
        elif has_photos == '10+':
            has_photos = 10
        
        for query in queryset:
            count = 0
            if query.photo_1:
                count += 1
            if query.photo_2:
                count += 1
            if query.photo_3:
                count += 1
            if query.photo_4:
                count += 1
            if query.photo_5:
                count += 1
            if query.photo_6:
                count += 1
            if query.photo_7:
                count += 1
            if query.photo_8:
                count += 1
            if query.photo_9:
                count += 1
            if query.photo_10:
                count += 1
            if query.photo_11:
                count += 1
            if query.photo_12:
                count += 1
            if query.photo_13:
                count += 1
            if query.photo_14:
                count += 1
            if query.photo_15:
                count += 1
            
            if count < has_photos:
                slug = query.slug
                queryset = queryset.exclude(slug__iexact=slug)
        
        open_house = data['open_house']
        queryset = queryset.filter(open_house__iexact=open_house)

        keywords = data['keywords']
        queryset = queryset.filter(description__icontains=keywords)

        serializer = ListingSerializer(queryset, many=True)

        return Response(serializer.data)