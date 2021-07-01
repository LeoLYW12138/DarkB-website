<template>
  <section class="container mx-auto w-full">
    <h1 class="mb-16 text-4xl lg:text-6xl">Check Out My Latest Video</h1>
    <div
      class="flex flex-wrap flex-col mb-4 xl:flex-row items-center justify-between"
    >
      <div class="sm-video-player">
        <h3 class="text-center text-lg mb-1 tracking-wider md:text-2xl">
          Previous Video
        </h3>
        <youtube-wrapper
          :video-id="videoIds.prev || ''"
          :fetch-state="$fetchState"
        />
      </div>

      <div class="md-video-player">
        <h3 class="text-center text-lg mb-1 tracking-wider md:text-2xl">
          Newborn Video
        </h3>
        <youtubeWrapper
          :video-id="videoIds.curr || ''"
          :fetch-state="$fetchState"
        />
      </div>
    </div>
    <div class="w-full inline-flex justify-center">
      <a
        href="https://www.youtube.com/channel/UClBq509EYyeMgN2wddN5v6g?view_as=subscriber"
        class="text-white tracking-wide btn play-button inline-flex items-center"
        rel="noopener"
        target="_blank"
      >
        Subscribe!
        <IconPlayArrow class="h-12 w-12"></IconPlayArrow>
      </a>
    </div>
  </section>
</template>

<script>
import youtubeWrapper from '@/components/home/YouTubeWrapper.vue';
import IconPlayArrow from '@/assets/icons/play_arrow.svg?inline';

export default {
  components: {
    youtubeWrapper,
    IconPlayArrow,
  },
  // activated() {
  //   if (this.$fetchState.timestamp <= Date.now() - 60 * 60 * 1000) {
  //     this.$fetch()
  //   }
  // },
  async fetch() {
    if (Object.keys(this.videoIds).length <= 0) {
      const [curr, prev] = await this.$axios
        .get('/api/latest-video?limit=2')
        .then((res) => {
          return res.data.videoIds;
        })
        .catch((err) => {
          console.error(err);
        });
      this.videoIds = { prev, curr };
    }
  },
  data() {
    return {
      videoIds: {},
    };
  },
};
</script>

<style scoped>
.play-button {
  background-color: red;
  padding-right: 1.4rem !important;
}
.player-button:hover {
  background-color: rgb(230, 25, 25);
}
.sm-video-player {
  width: 80%;
  height: auto;
}
.md-video-player {
  width: 100%;
  height: auto;
}
@screen xl {
  .sm-video-player {
    width: 38%;
  }
  .md-video-player {
    width: 58%;
  }
}
</style>