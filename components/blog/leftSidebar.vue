<template>
  <div class="px-4">
    <h1
      class="text-lg md:text-xl font-medium md:font-bold md:tracking-wider my-4"
    >
      Featured blogs
    </h1>
    <ul>
      <li v-for="blog in blogs" :key="blog.id">
        {{ blog.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    featuredBlogs: {
      type: Array,
      default: () => {},
    },
  },
  computed: {
    blogs() {
      return this.featuredBlogs.filter((blog) => blog.title);
    },
  },
};
</script>