<template>
  <div
    class="
      h-full
      max-w-[1920px]
      md:grid
      grid-flow-col
      lg:grid-cols-[20%,auto,20%]
      grid-rows-[100%] grid-cols-[auto,20%]
      3xl:mx-auto
    "
  >
    <blogFeatured :featured-blogs="featured" class="bg-white shadow-md hidden lg:block" />

    <main class="h-full flex flex-col justify-center content-between">
      <searchBar></searchBar>

      <article class="px-4 pb-4 md:(px-8 pb-8) flex-grow">
        <nuxt-content :document="article" class="mx-auto prose prose-sm sm:prose"></nuxt-content>
      </article>

      <blogNextPrev :next="next" :prev="prev"></blogNextPrev>
    </main>
    <blogToc :toc="article.toc" class="hidden md:block mt-20"></blogToc>
  </div>
</template>

<script>
import Vue from 'vue';
import blogFeatured from '@/components/blog/blogFeatured.vue';
import blogToc from '@/components/blog/blogToc.vue';
import blogNextPrev from '@/components/blog/blogNextPrev.vue';
import searchBar from '@/components/blog/searchBar.vue';
import copyButton from '@/components/blog/copyButton.vue';

export default {
  layout: 'blog',
  components: {
    blogFeatured,
    blogToc,
    blogNextPrev,
    searchBar,
  },
  async asyncData({ $content, params, error }) {
    const path = params.slug ? `/blogs/${params.slug}` : '/home';
    const [article] = await $content({ deep: true }).where({ path }).fetch();

    if (!article) {
      return error({ statusCode: 404, message: 'Article not found' });
    }

    const [prev, next] = await $content('blogs')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(article.slug)
      .fetch();

    const featured = await $content('blogs')
      .only(['title', 'slug'])
      .sortBy('popularity', 'desc')
      .fetch();

    return {
      article,
      prev,
      next,
      featured,
    };
  },
  data() {
    return {
      featuredBlogs: [
        { id: 1, title: 'Happy' },
        { id: 2, title: 'Hello World' },
        { id: 3, title: 'Ways to keep code clean' },
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
  methods: {
    copyToClipboard(article) {},
  },
  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description,
        },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.article.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.article.description,
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.article.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.article.description,
        },
      ],
    };
  },
};
</script>
