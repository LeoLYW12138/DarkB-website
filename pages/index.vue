<template>
  <div class="m-4 lg:m-8">
    <!-- hero -->
    <section class="w-full flex flex-col xl:flex-row flex-wrap items-center justify-between">
      <div class="inline-block mb-12 xl:mb-0">
        <div class="hero relative">
          <h1 class="watermark pl-2 absolute left-0 text-opacity-25 text-gray-400">DarkB</h1>
          <h3>Hello, World!</h3>
          <h1 class="ml-8">I am DarkB</h1>
          <h2>An IT enthusiast</h2>
        </div>
        <div class="px-auto m-2 flex flex-row justify-around">
          <a href="#" class="btn btn-lightGreen text-lg md:text-2xl">About me</a>
          <a href="#" class="btn btn-lightGreen text-lg md:text-2xl">Contact me</a>
        </div>
      </div>
      <div class="border border-black">
        <img src="https://via.placeholder.com/630x354.png?text=Image+Here" alt="Hero image" />
      </div>
    </section>
    <!-- hero end -->
    <div class="mt-4 h-16">
      <img
        id="see-more"
        class="mx-auto relative"
        width="48"
        height="48"
        src="~assets/images/icons/expand_more.svg"
        alt="Scroll Down to See More!"
        title="Scroll Down to see More"
      />
    </div>
  </div>
</template>

<script>

</script>

<style>
html {
  font-family: 'Noto Sans HK', Roboto, Arial, Helvetica, sans-serif;
}
.hero h1 {
  font-weight: 900; /*black*/
  font-size: 3.8rem;
}
.hero h2 {
  font-weight: 300;
  font-size: 3rem;
}
.hero h3 {
  font-weight: 500;
  font-size: 2rem;
}
h1.watermark {
  font-size: 8rem;
  bottom: 1rem;
  z-index: -99;
}

@screen md {
  .hero h1 {
    font-size: 5rem;
  }
  .hero h2 {
    font-size: 4rem;
  }
  .hero h3 {
    font-size: 2.5rem;
  }
  h1.watermark {
    font-size: 10rem;
  }
}

@screen lg {
  .hero h1 {
    font-size: 6rem;
  }
  .hero h2 {
    font-size: 4rem;
  }
  .hero h3 {
    font-size: 3rem;
  }
  h1.watermark {
    font-size: 11rem;
  }
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
