<template>
  <div class="m-4 border-red-500 border">
    <!-- hero -->
    <section class="mx-auto flex flex-row flex-wrap items-center">
      <div class="inline-block">
        <div class="relative">
          <h1 class="watermark pl-4 absolute text-opacity-25 text-gray-400">DarkB</h1>
          <h3>Hello, World!</h3>
          <h1 class="ml-8">I am DarkB</h1>
          <h2>An IT enthusiast</h2>
        </div>
        <a href="#" class="btn btn-lightGreen">About me</a>
        <a href="#" class="btn btn-lightGreen">Contact me</a>
      </div>
      <div class="border border-black w-auto">
        <img src alt />
        Image here
      </div>
    </section>
  </div>
</template>

<script>

</script>

<style>
html {
  font-family: 'Noto Sans HK', Roboto, Arial, Helvetica, sans-serif;
}
h1 {
  font-family: inherit;
  font-weight: 900;
  font-size: 7vw; /*96px*/
}
h2 {
  font-family: 'Noto Sans HK', Roboto, Arial, Helvetica, sans-serif;
  font-weight: 300;
  font-size: 4vw; /*64px*/
}
h3 {
  font-family: 'Noto Sans HK', Roboto, Arial, Helvetica, sans-serif;
  font-weight: 500;
  font-size: 3vw; /*48px*/
}
.watermark {
  font-size: 9vw; /*288px*/
  bottom: 2rem;
  left: 2rem;
  z-index: -99;
}

.btn-lightGreen {
  background-color: #b0fe76;
}
.btn-lightGreen:hover {
  background-color: #81e979;
}
</style>
