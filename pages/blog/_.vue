<template>
  <article>
    <h1>{{ article.title }}</h1>
    <nuxt-content :document="article" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const path = `/${params.pathMatch || '/'}`;
    const [article] = await $content({ deep: true }).where({ path }).fetch();

    if (!article) {
      return error({ statusCode: 404, message: 'Article not found' });
    }

    return {
      article,
    };
  },
};
</script>
