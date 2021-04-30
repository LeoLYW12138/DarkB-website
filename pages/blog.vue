<template>
  <div class="container mx-auto grid grid-flow-col-dense grid-cols-12">
    <leftSidebar
      :featured-blogs="featuredBlogs"
      class="bg-pink-300 col-span-2"
    ></leftSidebar>
    <div class="bg-green-300 col-span-7">b</div>
    <rightSidebar :blog="blog" class="bg-blue-300 col-span-3"></rightSidebar>
  </div>
</template>

<script>
import leftSidebar from '@/components/blog/leftSidebar.vue';
import rightSidebar from '@/components/blog/rightSidebar.vue';
export default {
  layout: 'blog',
  components: {
    leftSidebar,
    rightSidebar,
  },
  data() {
    return {
      featuredBlogs: [
        { id: 1, title: 'Happy' },
        { id: 2, title: 'Hello World' },
        { id: 3, title: 'Ways to keep code clean' },
      ],
      blog: {
        id: 1,
        title: 'happy',
        author: 'velaldkjf',
        sections: [
          { title: 'Introduction', content: 'test' },
          { title: 'Body1', content: 'Body2' },
          { title: 'Conclusion', content: 'conclusion' },
        ],
      },
    };
  },
};
</script>