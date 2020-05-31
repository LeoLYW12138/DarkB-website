<template>
  <div>
    <search-focus @keyup="focusSearch"></search-focus>
    <div class="flex flex-grow">
      <div class="relative">
        <div class="absolute inset-y-0 left-0 pl-1 pt-1 flex items-center">
          <img
            class="fill-current text-gray-500"
            src="~/assets/images/icons/search.svg"
            alt="Search"
          />
        </div>
        <input
          ref="search"
          type="text"
          placeholder="Search (press &quot;/&quot; to focus)"
          class="bg-gray-100 border border-gray-500 rounded-full px-4 pl-10 py-1 outline-none focus:border-blue-500"
        />
      </div>
    </div>
  </div>
</template>

<script>
import searchFocus from '@/components/searchFocus.vue';
  export default {
    components: {
      'search-focus': searchFocus,
    },
    methods: {
      focusSearch(e) {
        if (e.key === '/') {
          this.$refs.search.focus();
        }
      }
    },
  }
</script>

<style scoped>
</style>