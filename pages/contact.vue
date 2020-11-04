<template>
  <div class="my-4 lg:my-8 px-2 lg:px-4">
    <div class="container mx-auto">
      <h4 class="text-4xl mt-16 font-bold mb-12">Contact me at...</h4>
      <div class="lg:px-4 flex md:flex-row flex-col justify-around">
        <social
          href="mailto:hello.dark.b@gmail.com"
          text="hello.dark.b@gmail.com"
        >
          <svg class="mx-auto w-16 lg:w-32">
            <use href="~/assets/icons/gmail.svg#gmail"></use>
          </svg>
        </social>
        <social href="https://github.com/LeoLYW12138" text="LeoLYW12138">
          <svg class="mx-auto w-16 lg:w-32">
            <use href="~/assets/icons/github.svg#github"></use>
          </svg>
        </social>
        <social
          href="https://www.youtube.com/channel/UClBq509EYyeMgN2wddN5v6g?disable_polymer=true"
          text="DarkB Hello"
        >
          <svg class="mx-auto w-16 lg:w-32">
            <use
              style="color: red"
              href="~/assets/icons/youtube.svg#youtube"
            ></use>
          </svg>
        </social>
        <social text="Coming Soon" disabled>
          <svg class="mx-auto w-16 lg:w-32">
            <use href="~assets/icons/instagram.svg#instagram"></use>
          </svg>
        </social>
        <social text="Coming soon" disabled>
          <svg class="mx-auto w-16 lg:w-32">
            <use href="~assets/icons/twitter.svg#twitter"></use>
          </svg>
        </social>
      </div>
      <h4 class="text-4xl mt-16 font-bold mb-12">Or leave a word below</h4>
      <div>
        <cloud
          class="mx-auto w-full h-full"
          :data="words"
          font="Noto Sans HK"
          :font-size-mapper="fontSizeMapper"
          :rotate="rotate"
          spiral="archimedean"
          on-word-click="null"
        />
        <form
          class="w-full inline-flex justify-center space-x-2"
          @submit.prevent="addWord"
        >
          <input
            id="input-word"
            class="pl-4 border-black border-b rounded-lg"
            type="search"
            name="new"
            autocomplete="off"
          />
          <button class="btn btn-darkGreen" type="submit">Add a word</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import cloud from 'vue-d3-cloud';
import social from '@/components/sociallinks.vue';

export default {
  components: {
    cloud,
    social
  },
  data() {
    return {
      words: [
        { text: 'Leave', value: 1000 },
        { text: 'Some', value: 1000 },
        { text: 'Comment', value: 1000 },
        { text: 'Here', value: 1000 },
        { text: 'Would you', value: 1000 },
      ],
      fontSizeMapper: word => Math.log2(word.value) * 5,
      rotate: () => (~~(Math.random() * 6) - 2) * 15
    }
  },
  methods: {
    addWord(e){
      const text = e.target.elements.new.value;
      if (text) {
        const wordIdx = this.words.findIndex(word => word.text === text);
        if (wordIdx > -1){
          this.words[wordIdx].value += 500;
        } else {
          this.words.push({text, value: 1000});
        }
      }
    }
  }
}
</script>

<style scoped>
</style>