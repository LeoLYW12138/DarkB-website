<template>
  <div class="flex-row-center-center">
    <div
      class="rounded-lg flex-row-center-center bg-gray-300 m-4 shadow-md w-full max-w-[30rem] ring-green-400 ring-opacity-50 text-gray-400 focus-within:(text-gray-600
        ring)"
    >
      <IconSearch class="my-auto h-6 ml-2 w-6"></IconSearch>
      <input
        ref="search-input"
        aria-label="Search"
        autocomplete="on"
        name="search-input"
        placeholder="Search (press Ctrl+k to focus)"
        speech
        type="search"
        class="flex-grow bg-gray-300 m-2 p-1 placeholder-gray-500 focus:outline-none"
      />
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
  methods: {
    focusSearch(e) {
      if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        e.stopPropagation();
        this.$refs['search-input'].focus();
        return false;
      } else if (e.key === 'Escape') {
        this.$refs['search-input'].blur();
      }
    },
  },
};
</script>

<style scoped>
</style>