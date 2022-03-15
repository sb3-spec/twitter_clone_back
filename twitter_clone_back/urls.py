from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin', admin.site.urls),
    # re_path(r'^(?:.*)/?$', home_view),
    # path('<int:tweet_id>', tweets_detail_view),
    path('api/tweets/', include('tweets.api.urls')), 
    path('api/profiles/', include('profiles.api.urls')),
    path('api/users/', include('users.api.urls')),
    path('api/auth/', include('auth.api.urls')),
    path('api/search/', include('search.api.urls')),
    
]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
