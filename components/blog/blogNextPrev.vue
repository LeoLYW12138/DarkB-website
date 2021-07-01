<template>
  <div>
    <p>Path: {{ $route.path }}</p>
    <NuxtLink
      v-if="prev"
      :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
    >
      {{ prev.title }}
    </NuxtLink>

    <NuxtLink
      v-if="next"
      :to="{ name: 'blog-slug', params: { slug: next.slug } }"
    >
      {{ next.title }}
    </NuxtLink>
  </div>
</template>
(
<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => {},
    },
    next: {
      type: Object,
      default: () => {},
    },
  },
};
</script>