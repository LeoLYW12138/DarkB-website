<template>
  <section class="container mx-auto w-full">
    <div class="flex flex-col xl:flex-row flex-wrap items-center justify-between">
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
        <img src="https://via.placeholder.com/630x354.png?text=Image+Here" alt="Hero Image" />
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
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