<template>
  <div class="my-4 lg:my-8 px-2 lg:px-4">
    <div class="container mx-auto">
      <h4 class="text-4xl mt-16 font-bold mb-12">Contact me at...</h4>
      <h4 class="text-4xl mt-16 font-bold mb-12">Or leave a word below</h4>
      <div>
        <cloud
          class="w-full h-full"
          :data="words"
          font="Noto Sans HK"
          :fontSizeMapper="fontSizeMapper"
          :rotate="rotate"
          spiral="archimedean"
          onWordClick="null"
        />
        <form @submit.prevent="addWord">
          <label for="input-word">Input a word </label>
          <input id="input-word" type="text" name="new" autocomplete="false" />
          <button type="submit">Add a word</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import cloud from 'vue-d3-cloud';

export default {
  components: {
    cloud
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