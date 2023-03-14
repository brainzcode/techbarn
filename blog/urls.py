from django.urls import path
from .views import HomeView, post_single, AllPost, TagListView, PostSearchView, about, topics, contact, events

urlpatterns = [
    path('', HomeView.as_view(), name='home-view'),
    path('search/', PostSearchView.as_view(), name='post_search'),
    path('posts/', AllPost.as_view(), name='all_post'),
    path('about/', about, name='about'),
    path('topics/', topics, name='topics'),
    path('contact/', contact, name='contact'),
    path('events/', events, name='events'),
    path('<slug:post>/', post_single, name='post_single'),
    path('tag/<slug:tag>/', TagListView.as_view(), name='post_by_tag'),
]


