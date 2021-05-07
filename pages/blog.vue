<template>
  <div
    class="container h-full mx-auto grid grid-flow-row lg:(grid-flow-col-dense grid-cols-12)"
  >
    <leftSidebar
      :featured-blogs="featuredBlogs"
      class="bg-pink-300 col-span-3"
    ></leftSidebar>
    <div class="bg-green-300 col-span-6">
      <main v-for="article in trendArticles" :key="article.key">
        <articleCard :article="article"></articleCard>
      </main>
    </div>
    <rightSidebar :blog="blog" class="bg-blue-300 col-span-3"></rightSidebar>
  </div>
</template>

<script>
import leftSidebar from '@/components/blog/leftSidebar.vue';
import rightSidebar from '@/components/blog/rightSidebar.vue';
import articleCard from '@/components/blog/articleCard.vue';
export default {
  layout: 'blog',
  components: {
    leftSidebar,
    rightSidebar,
    articleCard,
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
      trendArticles: [
        {
          id: 1,
          cat: 'tech',
          title: 'Hello DarkB',
          less: 'Hello, My name is DarkB. Welcome back to another video',
          view: 5,
          cmCount: 3,
        },
        {
          id: 2,
          cat: 'life',
          title: 'Hello DarkB Home',
          less: 'Hello, My name is DarkB. Welcome to my room tour',
          view: 29,
          cmCount: 20,
        },
        {
          id: 3,
          cat: 'project',
          title: 'New project update',
          less: 'No way, I am so frustrated!',
          view: 50,
          cmCount: 73,
        },
      ],
    };
  },
};
</script>