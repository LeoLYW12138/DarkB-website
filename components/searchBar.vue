<template>
  <div>
    <search-focus @keyup="focusSearch"></search-focus>
    <div
      class="search-container absolute md:static md:block w-screen md:w-auto h-auto bg-gray-200 md:bg-transparent left-0 flex flex-grow"
      :class="{hidden : !isOpen}"
    >
      <div class="relative mx-auto">
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
          placeholder="press &quot;/&quot; to focus"
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
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
  },
  methods: {
    focusSearch(e) {
      if (e.key === '/') {
        this.$refs.search.focus();
      }
    }
  }
}
</script>


<style scoped>
.search-container {
  top: 3rem;
  z-index: 20;
}
</style>