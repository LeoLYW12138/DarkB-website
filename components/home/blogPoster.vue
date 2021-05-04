<template>
  <section>
    <div class="container mx-auto py-24">
      <h1 class="text-4xl lg:text-6xl mb-16">Latest / Trending Posts</h1>
      <div class="flex flex-col lg:flex-row justify-center items-stretch -m-4">
        <div
          v-for="article in trendArticles"
          :key="article.id"
          class="p-4 w-full lg:w-1/3"
        >
          <card :article="article" custom-class="mx-auto" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import card from '~/components/blog/articleCard.vue';
export default {
  components: {
    card,
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

<style>
.posters-bg {
  background-color: rgba(153, 245, 173, 0.87);
}
</style>