<template>
  <div class="my-4 lg:my-8 px-2 lg:px-4">
    <div class="container mx-auto">
      <h1 class="text-3xl lg:text:4xl text-center font-semibold">
        Yay, you found it! A credit for you
      </h1>
      <h2 class="text-2xl m-4">
        <span class="my-8 text-2xl lg:text-3xl fugaz">DarkB...</span> Why I
        chose this name?
      </h2>

      <div class="flex flex-col space-y-8 margin-auto">
        <reason
          title-highlight="DanucD"
          title="A female PUBG streamer"
          description="I take the uppercase in the first and last letter as an inspiration of
          my website name"
        />
        <reason
          title-highlight="D.A.R.K"
          title="A male Mindustry,... game
          Youtuber"
          description="I take his youtube name DARK as a part of my website name"
        />
        <reason
          title-highlight="Black Banana"
          title="A nick name which my
          highschool classmates call me"
          description="Actually the website's full name is Dark Banana when I
          create this"
        />

        <reason
          title-highlight="黑仔"
          custom-class="font-semibold italic"
          class="ita"
          title="Literally Black Boy"
          description="It is a slang in Cantonese which means a person who often goes into
          mishaps"
        />
      </div>
    </div>
  </div>
</template>

<script>
import reason from '~/components/secretReason.vue';

export default {
  components: {
    reason,
  },
};
</script>

<style scoped>
</style>
