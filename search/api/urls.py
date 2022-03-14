from django.urls import path


from .views import (
    search_results
)

urlpatterns = [
    path('', search_results)
]