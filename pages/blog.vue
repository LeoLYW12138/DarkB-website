<template>
  <div class="container grid grid-flow-col-dense grid-cols-12 w-full mx-8">
    <leftSidebar
      :featured-blogs="featuredBlogs"
      class="col-span-2 bg-pink-300"
    ></leftSidebar>
    <div class="col-span-7 bg-green-300">b</div>
    <div class="col-span-3 bg-blue-300">c</div>
  </div>
</template>

<script>
import leftSidebar from '@/components/blog/leftSidebar.vue';
export default {
  layout: 'blog',
  components: {
    leftSidebar,
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
};
</script>