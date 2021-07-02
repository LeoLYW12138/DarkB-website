<template>
  <footer class="flex items-center px-2 py-5 font-medium text-base">
    <NuxtLink
      v-if="prev"
      class="
        mr-auto
        flex
        justify-start
        items-center
        px-3
        py-1
        rounded-md
        hover:(text-emerald-800
        bg-emerald-100)
      "
      :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
    >
      <IconArrow class="inline transform rotate-180 w-5 h-5 mt-0.5 mr-1"></IconArrow>
      <span class="inline-block truncate max-w-[15ch]">{{ prev.title }}</span>
    </NuxtLink>

    <NuxtLink
      v-if="next"
      class="
        ml-auto
        flex
        justify-end
        items-center
        px-3
        py-1
        rounded-md
        hover:(text-emerald-800
        bg-emerald-100)
      "
      :to="{ name: 'blog-slug', params: { slug: next.slug } }"
    >
      <span class="inline-block truncate max-w-[15ch]">{{ next.title }}</span>
      <IconArrow class="inline w-5 h-5 mt-0.5 ml-1"></IconArrow>
    </NuxtLink>
  </footer>
</template>
(
<script>
import IconArrow from '@/assets/icons/arrow.svg?inline';

export default {
  components: {
    IconArrow,
  },
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