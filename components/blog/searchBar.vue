<template>
  <div class="flex-row-center-center">
    <div
      class="
        relative
        rounded-lg
        flex-row-center-center
        bg-gray-300
        m-4
        shadow-md
        w-full
        max-w-[30rem]
        ring-green-400 ring-opacity-50
        text-gray-400
        focus-within:(text-gray-600
        ring)
      "
    >
      <IconSearch class="my-auto h-6 ml-2 w-6"></IconSearch>
      <input
        ref="search-input"
        v-model.trim="query"
        aria-label="Search"
        autocomplete="on"
        name="search-input"
        placeholder="Search (press Ctrl+k to focus)"
        speech
        type="search"
        class="flex-grow bg-gray-300 m-2 p-1 placeholder-gray-500 focus:outline-none"
        tabindex="-1"
        @focus="isFocused = true"
      />
      <ul
        v-if="articles.length"
        class="
          absolute
          truncate
          top-full
          left-0
          right-0
          ml-8
          bg-white
          outline-dark-50
          rounded-t-none rounded-md
        "
        :class="{ hidden: !isFocused }"
      >
        <li v-for="article of articles" :key="article.slug">
          <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }">{{
            article.title
          }}</NuxtLink>
        </li>
      </ul>
    </div>
    <searchFocus @keydown="focusSearch"></searchFocus>
  </div>
</template>

<script>
import searchFocus from '@/components/blog/searchFocus.vue';
import IconSearch from '@/assets/icons/search.svg?inline';

export default {
  components: {
    searchFocus,
    IconSearch,
  },
  data() {
    return {
      query: '',
      articles: [],
      isFocused: false,
    };
  },
  watch: {
    async query(query) {
      if (!query) {
        this.articles = [];
        return;
      }
      this.articles = await this.$content('blogs')
        .only(['title', 'slug'])
        .sortBy('createdAt', 'asc')
        .limit(6)
        .search(query)
        .fetch();
    },
  },
  methods: {
    focusSearch(e) {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        e.stopPropagation();
        this.$refs['search-input'].focus();
        return false;
      } else if (e.key === 'Escape') {
        e.preventDefault();
        this.$refs['search-input'].blur();
      }
    },
  },
};
</script>

<style scoped>
</style>