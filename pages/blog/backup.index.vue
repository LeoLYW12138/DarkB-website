<template>
  <div
    class="
      h-full
      max-w-[1920px]
      grid-cols-[20%,auto] grid-rows-[100%]
      lg:(grid
      grid-flow-col)
      3xl:mx-auto
    "
  >
    <blogFeatured :featured-blogs="featuredBlogs" class="bg-white shadow-md hidden lg:block" />

    <div>
      <searchBar></searchBar>

      <div class="h-full md:(grid grid-flow-col grid-cols-11)">
        <main class="px-4 pb-4 col-start-2 col-span-7 md:(px-8 pb-8)">
          {{ article.codeblocks || '' }}
          <nuxt-content :document="article" class="mx-auto prose prose-sm sm:prose"></nuxt-content>
        </main>

        <blogToc :toc="article.toc" class="col-span-3 hidden md:block"></blogToc>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import blogFeatured from '@/components/blog/blogFeatured.vue';
import blogToc from '@/components/blog/blogToc.vue';
import searchBar from '@/components/blog/searchBar.vue';
import copyButton from '@/components/blog/copyButton.vue';

export default {
  layout: 'blog',
  components: {
    blogFeatured,
    blogToc,
    searchBar,
  },
  async asyncData({ $content, params, error }) {
    const article = await $content('/home').fetch();

    if (!article) {
      return error({ statusCode: 404, message: 'Article not found' });
    }

    return {
      article,
    };
  },
  data() {
    return {
      featuredBlogs: [
        { id: 1, title: 'Happy' },
        { id: 2, title: 'Hello World' },
        { id: 3, title: 'Ways to keep code clean' },
      ],
      blog: {
        id: 0,
        title: 'Landing Page',
        author: 'DarkB Hello',
        sections: [
          { title: 'Favourite', content: 'Saved blogs' },
          { title: 'Hot', content: 'Popular blogs' },
          {
            title: 'How to write a blog',
            content:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          },
          {
            title: 'Sign in',
            content:
              'Magna etiam tempor orci eu lobortis elementum nibh tellus. Eleifend mi in nulla posuere sollicitudin aliquam. Neque ornare aenean euismod elementum nisi quis eleifend quam adipiscing. Sit amet commodo nulla facilisi nullam vehicula. Maecenas accumsan lacus vel facilisis volutpat est velit egestas. At urna condimentum mattis pellentesque. Nulla porttitor massa id neque aliquam vestibulum morbi blandit. Cras ornare arcu dui vivamus arcu felis bibendum. Nunc faucibus a pellentesque sit amet porttitor. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Sit amet cursus sit amet dictum sit amet justo. Dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu. Ullamcorper dignissim cras tincidunt lobortis. Amet nulla facilisi morbi tempus iaculis urna. Id interdum velit laoreet id donec ultrices.',
          },
        ],
      },
      trendArticles: [
        {
          id: 1,
          cat: 'tech',
          title: 'Hello DarkB',
          less: 'Hello, My name is DarkB. Welcome back to another video',
          view: 5,
          cmCount: 3,
        },
        {
          id: 2,
          cat: 'life',
          title: 'Hello DarkB Home',
          less: 'Hello, My name is DarkB. Welcome to my room tour',
          view: 29,
          cmCount: 20,
        },
        {
          id: 3,
          cat: 'project',
          title: 'New project update',
          less: 'No way, I am so frustrated!',
          view: 50,
          cmCount: 73,
        },
      ],
    };
  },
  mounted() {
    setTimeout(() => {
      const blocks = document.querySelectorAll('.nuxt-content-highlight');
      for (const block of blocks) {
        const CopyButton = Vue.extend(copyButton);
        const component = new CopyButton().$mount();
        block.appendChild(component.$el);
      }
    }, 100);
  },
};
</script>