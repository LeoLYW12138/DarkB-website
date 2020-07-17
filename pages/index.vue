<template>
  <div class="m-4 lg:m-8">
    <!-- hero -->
    <hero />
    <!-- hero end -->
    <div class="h-auto my-12">
      <div class="text-center text-lg md:text-2xl">Scroll Down to See More</div>
      <img
        id="see-more"
        class="mx-auto relative"
        width="48px"
        height="48px"
        src="~assets/images/icons/expand_more.svg"
        alt="Scroll Down to See More!"
        title="Scroll Down to See More!"
      />
    </div>

    <blog-posters></blog-posters>
  </div>
</template>

<script>
import hero from '@/components/hero.vue';
import blogPosters from '@/components/blog-posters.vue';

export default {
  components: {
    hero,
    "blog-posters": blogPosters
  },
};

</script>

<style>
body {
  font-family: 'Noto Sans HK', Roboto, Arial, Helvetica, sans-serif;
  background-color: whitesmoke;
}

.btn-lightGreen {
  background-color: #b0fe76;
}
.btn-lightGreen:hover {
  background-color: #81e979;
}

@keyframes UpandDown {
  0% {
    top: 0;
  }
  50% {
    top: 3rem;
  }
  100% {
    top: 0;
  }
}

#see-more {
  animation-name: UpandDown;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}
</style>
