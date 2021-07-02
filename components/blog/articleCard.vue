<template>
  <div class="rounded-lg h-full max-w-md shadow-md text-center px-8 pt-12 pb-40 relative">
    <!-- categroy -->
    <h2 class="font-medium text-center text-base tracking-widest text-gray-700 uppercase">
      {{ article.cat }}
    </h2>

    <!-- title -->
    <h1 class="font-medium mb-3 text-2xl text-gray-900 capitalize md:text-3xl">
      {{ article.title }}
    </h1>

    <!-- short summary -->
    <p class="leading-relaxed mb-8 text-gray-700 truncate">
      {{ article.less }}
    </p>
    <div class="text-center mb-16 w-full bottom-0 left-0 absolute">
      <nuxt-link to="/" class="text-indigo-700 inline-flex items-center">
        Learn More
        <IconArrow class="h-4.5 ml-2 w-4.5"></IconArrow>
      </nuxt-link>
    </div>

    <!-- statistics -->
    <section
      class="flex mt-2 text-center leading-none w-full py-4 bottom-0 left-0 justify-center absolute"
    >
      <!-- view -->
      <span
        class="
          border-r-2 border-gray-500
          mr-3
          text-sm
          leading-none
          py-1
          pr-3
          text-gray-600
          inline-flex
          items-center
        "
      >
        <IconEye class="h-5 mt-1 mr-1 w-5"></IconEye>
        {{ article.view }}
      </span>

      <!-- comment count -->
      <span class="mr-3 text-sm leading-none text-gray-600 inline-flex items-center">
        <IconComment class="h-5 mt-1 mr-1 w-5"></IconComment>
        {{ article.cmCount }}
      </span>
    </section>
  </div>
</template>

<script>
import IconEye from '@/assets/icons/eye.svg?inline';
import IconArrow from '@/assets/icons/arrow.svg?inline';
import IconComment from '@/assets/icons/comment.svg?inline';

export default {
  components: {
    IconEye,
    IconArrow,
    IconComment,
  },
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
</style>