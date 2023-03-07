from .models import Post
import factory
from django.contrib.auth.models import User
from factory.faker import faker

FAKER = faker.Faker()


class PostFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = Post

    title = factory.Faker('sentence', nb_words=8)
    subtitle = factory.Faker('sentence', nb_words=12)
    slug = factory.Faker('slug')
    author = User.objects.get_or_create(username='admin')[0]

    @factory.lazy_attribute
    def content(self):
        x = ''
        for _ in range(0, 5):
            x += '\n' + FAKER.paragraph(nb_sentences=30) + '\n'
        return x

    status = 'published'

    @factory.post_generation
    def tags(self, create, extracted, **kwargs):
        if not create:
            return

        if extracted:
            self.tags.add(extracted)
        else:
            self.tags.add(
                'python',
                'django',
                'azure',
                'database',
                'javaScript',
                'nextjs',
                'angular',
                'java',
                'go',
                'pytest',
                'go-testing',
                'aws',
                'digital-ocean',
                'docker',
                'kubernetes',
            )
