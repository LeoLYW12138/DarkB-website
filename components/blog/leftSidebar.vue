<template>
  <aside class="px-4">
    <h1 class="text-lg md:(text-xl font-bold tracking-wider) my-4 font-medium">
      Featured blogs
    </h1>
    <ul class="text-gray-600">
      <li
        v-for="blog in blogs"
        :key="blog.id"
        class="cursor-pointer py-1 px-2 hover:(rounded-md bg-emerald-100 bg-opacity-70 text-emerald-800) w-full"
      >
        <a href="#">{{ blog.title }}</a>
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  props: {
    featuredBlogs: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    blogs() {
      return this.featuredBlogs.filter((blog) => blog.title);
    },
  },
};
</script>

<style scoped>
</style>