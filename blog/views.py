from django.shortcuts import get_object_or_404, render
from django.views.generic.list import ListView

from .models import Post
from .forms import PostSearchForm, CommentForm

# Create your views here.


class HomeView(ListView):
    model = Post
    context_object_name = 'posts'
    paginate_by = 10

    def get_template_names(self):
        if self.request.htmx:
            return 'blog/components/post-list-elements.html'
        return 'blog/index.html'


def post_single(request, post):
    post = get_object_or_404(Post, slug=post, status='published')
    related = Post.objects.filter(author=post.author)[:5]
    comments = post.comments.filter(active=True)
    new_comment = None
    # Comment posted
    if request.method == 'POST':
        comment_form = CommentForm(data=request.POST)
        if comment_form.is_valid():

            # Create Comment object but don't save to database yet
            new_comment = comment_form.save(commit=False)
            # Assign the current post to the comment
            new_comment.post = post
            # Save the comment to the database
            new_comment.save()
    else:
        comment_form = CommentForm()

    context = {
        'post': post,
        'related': related,
        'comments': comments,
        'new_comment': new_comment,
        'comment_form': comment_form
    }

    return render(request, 'blog/single.html', context)


class AllPost(ListView):
    model = Post
    context_object_name = 'posts'
    paginate_by = 10

    def get_template_names(self):
        if self.request.htmx:
            return 'blog/components/post-list-elements.html'
        return 'blog/all-posts.html'


class TagListView(ListView):
    model = Post
    paginate_by = 10
    context_object_name = 'posts'

    def get_queryset(self):
        return Post.objects.filter(tags__name=self.kwargs['tag'])

    def get_template_names(self):
        if self.request.htmx:
            return 'blog/components/post-list-elements-tags.html'
        return 'blog/tags.html'

    def get_context_data(self, **kwargs):
        context = super(TagListView, self).get_context_data(**kwargs)
        context['tag'] = self.kwargs['tag']

        return context


class PostSearchView(ListView):
    model = Post
    paginate_by = 10
    context_object_name = 'posts'
    form_class = PostSearchForm

    def get_queryset(self):
        form = self.form_class(self.request.GET)
        if form.is_valid():
            valid_form = Post.objects.filter(
                title__icontains=form.cleaned_data['q'])
            return valid_form

        return []

    def get_template_names(self):
        if self.request.htmx:
            return 'blog/components/post-list-elements-search.html'
        return 'blog/search.html'


def about(request):
    return render(request, 'about.html')


def topics(request):
    return render(request, 'topics.html')


def contact(request):
    return render(request, 'contact.html')


def events(request):
    return render(request, 'events.html')


def error_400(request, exception=None):
    data = {"exception": exception}
    return render(request, 'blog/400.html', data)


def error_403(request, exception=None):
    data = {"exception": exception}
    return render(request, 'blog/403.html', data)


def error_404(request, exception=None):
    data = {"exception": exception}
    return render(request, 'blog/404.html', data)


def error_500(request,  exception=None):
    data = {"exception": exception}
    return render(request, 'blog/500.html', data)
