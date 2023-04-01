import pytest
from django.urls import reverse
from pytest_django.asserts import assertTemplateUsed

pytestmark = pytest.mark.django_db


class TestAllPost:
    def test_post_url(self, client):
        url = reverse('all_post')
        response = client.get(url)
        assert response.status_code == 200

    def test_all_post_htmx_fragment(self, client):
        headers = {'HTTP_HX-Request': 'true'}
        url = reverse('all_post')
        response = client.get(url, **headers)
        assertTemplateUsed(
            response, 'blog/components/post-list-elements.html')
