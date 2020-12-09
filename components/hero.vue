<template>
  <section class="container mx-auto w-full">
    <div
      class="flex flex-col xl:flex-row flex-wrap items-center justify-between"
    >
      <div class="inline-block mb-12 xl:mb-0">
        <div class="hero relative">
          <h1
            class="watermark pl-2 absolute left-0 text-opacity-25 text-gray-400"
          >
            DarkB
          </h1>
          <h3>Hello, World!</h3>
          <h1 class="ml-8 text-black">I am DarkB</h1>
          <h2>An IT enthusiast</h2>
        </div>
        <div class="px-auto m-2 flex flex-row justify-around">
          <nuxt-link to="/about" class="btn btn-lightGreen text-base md:text-lg"
            >About me</nuxt-link
          >
          <nuxt-link
            to="/contact"
            class="btn btn-lightGreen text-base md:text-lg"
            >Contact me</nuxt-link
          >
        </div>
      </div>
      <div class="blur-edge hidden xl:block">
        <!-- <img class="hidden" src="~assets/images/computer-hero.jpg" alt="Hero image" /> -->
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.blur-edge {
  background-image: url('~assets/images/computer-hero.jpg');
  width: 640px;
  height: 426px;
  box-shadow: 0 0 8px 8px whitesmoke inset;
}
h1 {
  font-weight: 900; /*black*/
  font-size: 3.3rem;
}
h2 {
  font-weight: 300;
  font-size: 2.8rem;
}
h3 {
  font-weight: 500;
  font-size: 2rem;
}
h1.watermark {
  font-size: 7rem;
  bottom: 1rem;
  z-index: -99;
}

@screen md {
  h1 {
    font-size: 5rem;
  }
  h2 {
    font-size: 4rem;
  }
  h3 {
    font-size: 2.5rem;
  }
  h1.watermark {
    font-size: 10rem;
  }
}

@screen lg {
  h1 {
    font-size: 6rem;
  }
  h2 {
    font-size: 4rem;
  }
  h3 {
    font-size: 3rem;
  }
  h1.watermark {
    font-size: 11rem;
  }
}
</style>