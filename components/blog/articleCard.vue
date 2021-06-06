<template>
  <div
    class="rounded-lg h-full max-w-md shadow-md text-center px-8 pt-12 pb-40 relative"
  >
    <!-- categroy -->
    <h2
      class="font-medium text-center text-base tracking-widest text-gray-700 uppercase"
    >
      {{ article.cat }}
    </h2>

    <!-- title -->
    <h1 class="text-2xl md:text-3xl font-medium text-gray-900 mb-3 capitalize">
      {{ article.title }}
    </h1>

    <!-- short summary -->
    <p class="leading-relaxed mb-8 text-gray-700 truncate">
      {{ article.less }}
    </p>
    <div class="text-center mb-16 w-full bottom-0 left-0 absolute">
      <nuxt-link to="/" class="text-indigo-700 inline-flex items-center">
        Learn More
        <svg width="18px" height="18px" class="ml-2">
          <use
            x-link:href="~assets/icons/arrow_right.svg#arrowR"
            href="~assets/icons/arrow_right.svg#arrowR"
          />
        </svg>
      </nuxt-link>
    </div>

    <!-- statistics -->
    <section
      class="flex mt-2 text-center leading-none w-full py-4 bottom-0 left-0 justify-center absolute"
    >
      <!-- view -->
      <span
        class="border-r-2 border-gray-500 mr-3 text-sm leading-none py-1 pr-3 text-gray-600 inline-flex items-center"
      >
        <svg class="h-5 mt-1 mr-1 w-5">
          <use
            xlink:href="~assets/icons/eye.svg#eye"
            href="~assets/icons/eye.svg#eye"
          />
        </svg>
        {{ article.view }}
      </span>

      <!-- comment count -->
      <span
        class="mr-3 text-sm leading-none text-gray-600 inline-flex items-center"
      >
        <svg class="h-5 mt-1 mr-1 w-5">
          <use
            xlink:href="~assets/icons/comment.svg#comment"
            href="~assets/icons/comment.svg#comment"
          />
        </svg>
        {{ article.cmCount }}
      </span>
    </section>
  </div>
</template>

<script>
export default {
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