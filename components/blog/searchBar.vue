<template>
  <div class="flex-row-center-center">
    <div
      class="flex-row-center-center w-full max-w-[30rem] rounded-lg m-4 shadow-md bg-gray-300 text-gray-400 focus-within:(text-gray-600 ring) ring-green-400 ring-opacity-50"
    >
      <svg width="24px" height="24px" class="my-auto ml-2">
        <use class="fill-current" href="~assets/icons/search.svg#search"></use>
      </svg>
      <input
        ref="search-input"
        aria-label="Search"
        autocomplete="on"
        name="search-input"
        placeholder="Search (press Ctrl+k to focus)"
        speech
        type="search"
        class="flex-grow m-2 p-1 bg-gray-300 placeholder-gray-500 focus:outline-none"
      />
    </div>
    <search-focus @keydown="focusSearch"></search-focus>
  </div>
</template>

<script>
import searchFocus from '@/components/blog/searchFocus.vue';
export default {
  components: {
    'search-focus': searchFocus,
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
.flex-row-center-center {
  @apply flex flex-row justify-center content-center;
}
</style>