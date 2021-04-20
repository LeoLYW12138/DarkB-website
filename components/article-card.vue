<template>
  <div
    class="h-full max-w-md posters-bg px-8 pt-12 pb-40 rounded-lg text-center relative shadow-md"
    :class="customClass"
  >
    <!-- categroy -->
    <h2 class="tracking-widest text-base font-medium uppercase text-gray-700">
      {{ article.cat }}
    </h2>

    <!-- title -->
    <h1 class="text-2xl md:text-3xl font-medium text-gray-900 mb-3 capitalize">
      {{ article.title }}
    </h1>

    <!-- short summary -->
    <p class="leading-relaxed text-gray-700 mb-8">{{ article.less }}</p>
    <div class="absolute text-center bottom-0 left-0 w-full mb-16">
      <nuxt-link to="/" class="text-indigo-700 inline-flex items-center">
        Learn More
        <svg width="18px" height="18px" class="ml-2">
          <use
            x-link:href="~/assets/icons/arrow_right.svg#arrowR"
            href="~/assets/icons/arrow_right.svg#arrowR"
          />
        </svg>
      </nuxt-link>
    </div>

    <!-- statistics -->
    <div
      class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4"
    >
      <!-- view -->
      <span
        class="text-gray-600 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-500"
      >
        <svg height="18px" width="18px" class="mt-1 mr-1">
          <use
            xlink:href="~/assets/icons/eye.svg#eye"
            href="~/assets/icons/eye.svg#eye"
          />
        </svg>
        {{ article.view }}
      </span>

      <!-- comment count -->
      <span
        class="text-gray-600 mr-3 inline-flex items-center leading-none text-sm"
      >
        <svg height="18px" width="18px" class="mt-1 mr-1">
          <use
            xlink:href="~/assets/icons/comment.svg#comment"
            href="~/assets/icons/comment.svg#comment"
          />
        </svg>
        {{ article.cmCount }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
    customClass: {
      type: String,
      default: '',
    },
  },
};
</script>

<style>
</style>