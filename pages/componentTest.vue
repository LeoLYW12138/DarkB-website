<template>
  <div class="container flex flex-col lg:flex-row">
    <articleCard
      v-for="article in trendArticles"
      :key="article.id"
      :article="article"
      class="mx-auto bg-[#99f5ad] bg-opacity-87 m-4"
    ></articleCard>
  </div>
</template>

<script>
import articleCard from '@/components/blog/articleCard.vue';

export default {
  components: {
    articleCard,
  },
  data() {
    return {
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