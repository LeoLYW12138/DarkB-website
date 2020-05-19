<template>
  <div class="mx-2">
    <h1 class="font-bold text-xl text-green-700 hover:text-red-400">
      About me
    </h1>
    <p>Hello guys, I am Leo. Thanks for making it here to browse my site</p>
    <p>It is my first time making a full stack website (actually quite challenging to me)</p>
    <p>Hope you guys enjoy and I will constantly update the website if I got a new idea</p>
    <p>You can always comment down below to give opinion to my website.</p>
    <p>Welcome to any new ideas ^.^</p>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'About Me',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Information about me'
        }
      ]

    }
  }
}
</script>

<style scoped>

</style>
