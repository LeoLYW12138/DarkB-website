<template>
  <section>
    <div class="container py-24 mx-auto">
      <h1 class="text-4xl lg:text-6xl mb-16">Latest / Trending Posts</h1>
      <div class="flex flex-wrap justify-center -m-4">
        <div
          v-for="article in trendArticles"
          :key="article.id"
          class="p-4 w-full lg:w-1/3"
        >
          <div
            class="h-full posters-bg px-8 pt-12 pb-40 rounded-lg text-center relative shadow-md"
          >
            <h2
              class="tracking-widest text-base font-medium uppercase text-gray-700"
            >
              {{ article.cat }}
            </h2>
            <h1
              class="text-2xl md:text-3xl font-medium text-gray-900 mb-3 capitalize"
            >
              {{ article.title }}
            </h1>
            <p class="leading-relaxed text-gray-700 mb-8">{{ article.less }}</p>
            <div class="absolute text-center bottom-0 left-0 w-full mb-16">
              <nuxt-link
                to="/"
                class="text-indigo-700 inline-flex items-center"
              >
                Learn More
                <svg width="18px" height="18px" class="ml-2">
                  <use
                    x-link:href="~assets/icons/arrow_right.svg#arrowR"
                    href="~assets/icons/arrow_right.svg#arrowR"
                  />
                </svg>
              </nuxt-link>
            </div>
            <div
              class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4"
            >
              <span
                class="text-gray-600 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-500"
              >
                <svg height="18px" width="18px" class="mt-1 mr-1">
                  <use
                    xlink:href="~assets/icons/eye.svg#eye"
                    href="~assets/icons/eye.svg#eye"
                  />
                </svg>
                {{ article.view }}
              </span>
              <span
                class="text-gray-600 mr-3 inline-flex items-center leading-none text-sm"
              >
                <svg height="18px" width="18px" class="mt-1 mr-1">
                  <use
                    xlink:href="~assets/icons/comment.svg#comment"
                    href="~assets/icons/comment.svg#comment"
                  />
                </svg>
                {{ article.cmCount }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
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
    }
  },
}
</script>

<style scoped>
.posters-bg {
  background-color: rgba(153, 245, 173, 0.87);
}
</style>