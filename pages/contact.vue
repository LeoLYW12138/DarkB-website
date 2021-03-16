<template>
  <div class="my-4 lg:my-8 px-2 lg:px-4">
    <div class="container mx-auto">
      <h4 class="header-font">Contact me at...</h4>
      <div class="lg:px-4 flex md:flex-row flex-col justify-around">
        <social
          href="mailto:hello.dark.b@gmail.com?subject=A%20comment%20on%20your%20site"
          text="hello.dark.b@gmail.com"
        >
          <svg class="mx-auto w-16 lg:w-32">
            <use
              xlink:href="~/assets/icons/gmail.svg#gmail"
              href="~/assets/icons/gmail.svg#gmail"
            ></use>
          </svg>
        </social>
        <social href="https://github.com/LeoLYW12138" text="LeoLYW12138">
          <svg class="mx-auto w-16 lg:w-32">
            <use
              xlink:href="~/assets/icons/github.svg#github"
              href="~/assets/icons/github.svg#github"
            ></use>
          </svg>
        </social>
        <social
          href="https://www.youtube.com/channel/UClBq509EYyeMgN2wddN5v6g?disable_polymer=true"
          text="DarkB Hello"
        >
          <svg class="mx-auto w-16 lg:w-32">
            <use
              style="color: red"
              xlink:href="~/assets/icons/youtube.svg#youtube"
              href="~/assets/icons/youtube.svg#youtube"
            ></use>
          </svg>
        </social>
        <social text="Coming Soon" disabled>
          <svg class="mx-auto w-16 lg:w-32">
            <use
              xlink:href="~assets/icons/instagram.svg#instagram"
              href="~assets/icons/instagram.svg#instagram"
            ></use>
          </svg>
        </social>
        <social text="Coming soon" disabled>
          <svg class="mx-auto w-16 lg:w-32">
            <use
              xlink:href="~assets/icons/twitter.svg#twitter"
              href="~assets/icons/twitter.svg#twitter"
            ></use>
          </svg>
        </social>
      </div>
      <h4 class="header-font">Or leave a word below</h4>
      <div
        ref="cloud-container"
        class="cloud-container"
        :class="{ loaded: wordsFetched }"
      >
        <cloud
          class="mx-auto w-full h-auto"
          :data="words"
          font="Noto Sans HK"
          :font-size-mapper="fontSizeMapper"
          :rotate="rotate"
          :on-word-click="() => false"
          :on-word-hover="onWordHover"
        />
        <span
          ref="tooltip"
          class="tooltip absolute whitespace-no-wrap hidden bg-yellow-400 opacity-75 border border-gray-600 shadow-md rounded-md p-2 z-10"
        ></span>
      </div>
      <form
        class="w-full flex flex-wrap justify-center space-x-2"
        @submit.prevent="addWord"
      >
        <input
          v-model.trim="inputword"
          class="p-4 mb-3 md:mb-0 shadow rounded-lg flex-1 max-w-xs md:max-w-md"
          type="search"
          placeholder="Add a word here"
        />
        <button class="btn btn-darkGreen" type="submit">
          Add {{ displayWord() }}
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import cloud from '@/components/Cloud.vue'
import social from '@/components/sociallinks.vue'

export default {
  components: {
    social,
    cloud,
  },
  data() {
    return {
      inputword: '',
      listenerAdded: false,
      unsubscribe: null,
      wordsFetched: false,
      words: [
        // { text: 'Would', value: 1000 },
        // { text: 'You', value: 1000 },
        // { text: 'Leave', value: 1000 },
        // { text: 'Some', value: 1000 },
        // { text: 'Comments', value: 1000 },
        // { text: 'Here', value: 1000 },
      ],
      fontSizeMapper: (word) => Math.log2(word.value) * 5,
      rotate: () => (~~(Math.random() * 6) - 3) * 15,
      onWordHover: (word) => {
        const tooltip = this.$refs.tooltip
        tooltip.innerHTML = `${word.text}<br>Popularity: ${
          (word.value - 1000) / 500 + 1
        }`
        tooltip.style.display = 'block'

        if (!this.listenerAdded) {
          const cloudContainer = this.$refs['cloud-container']

          cloudContainer.addEventListener('mousemove', (e) => {
            const bodyWidth = document.body.clientWidth
            const bodyHeight = document.body.clientHeight
            const containerX = cloudContainer.getClientRects()[0].left
            const containerY = cloudContainer.getClientRects()[0].top
            const tooltipWidth = tooltip.clientWidth
            const tooltipHeight = tooltip.clientHeight
            const offset = 10

            tooltip.style.left =
              e.pageX + tooltipWidth + offset < bodyWidth
                ? e.clientX - containerX + offset + 'px'
                : bodyWidth - offset / 2 - tooltipWidth - containerX + 'px'
            tooltip.style.top =
              e.pageY + tooltipHeight + offset < bodyHeight
                ? e.clientY - containerY + offset + 'px'
                : bodyHeight - offset / 2 - tooltipHeight - containerY + 'px'
          })

          cloudContainer.addEventListener('mouseout', (e) => {
            tooltip.style.display = 'none'
          })

          this.listenerAdded = true
        }
      },
    }
  },
  mounted() {
    const docRef = this.$fire.firestore.doc('word-cloud/comments')
    this.unsubscribe = docRef.onSnapshot((doc) => {
      this.wordsFetched = true
      this.words = doc.data().words
    })
  },
  beforeDestroy() {
    this.unsubscribe()
  },
  methods: {
    addWord() {
      const text = this.inputword.split(' ', 1)[0]
      if (text) {
        const wordIdx = this.words.findIndex((word) => word.text === text)
        if (wordIdx > -1) {
          this.words[wordIdx].value += 500
        } else {
          this.words.push({ text, value: 1000 })
        }
        this.updateFirestore()
      }
    },
    displayWord() {
      const word = this.inputword
      if (!word) {
        return 'nothing'
      } else {
        return `"${word.split(' ', 1)[0]}"`
      }
    },
    async updateFirestore() {
      try {
        await this.$fire.firestore
          .doc('word-cloud/comments')
          .update({ words: this.words })
      } catch (e) {
        console.error(e)
      }
    },
  },
}
</script>

<style scoped>
.cloud-container {
  min-width: 60%;
  min-height: 150px;
  position: relative;
}

.cloud-container:not(.loaded)::before {
  content: '';
  position: absolute;
  left: 2rem;
  right: 2rem;
  top: 2rem;
  bottom: 2rem;
  z-index: -1;
  background-repeat: repeat-y;
  background-image: linear-gradient(
      100deg,
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 80%
    ),
    linear-gradient(lightgray 100%, transparent 0);
  background-size: 100px 100%, 100% 100%;
  background-position: 0 0, 0 0;

  animation: shine 2s infinite;
}

@keyframes shine {
  to {
    background-position: 100% 0, 0 0;
  }
}
</style>
