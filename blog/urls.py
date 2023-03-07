from django.urls import path
from .views import HomeView, post_single, AllPost, TagListView, PostSearchView

urlpatterns = [
    path('', HomeView.as_view(), name='home-view'),
    path('search/', PostSearchView.as_view(), name='post_search'),
    path('posts/', AllPost.as_view(), name='all_post'),
    path('<slug:post>/', post_single, name='post_single'),
    path('tag/<slug:tag>/', TagListView.as_view(), name='post_by_tag'),
]
