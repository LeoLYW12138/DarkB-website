<template>
  <section class="container mx-auto w-full">
    <h1 class="text-4xl lg:text-6xl mb-16">Check Out My Latest Video</h1>
    <div
      class="mb-4 flex flex-wrap flex-col xl:flex-row items-center justify-between"
    >
      <div class="sm-video-player">
        <h3 class="text-center text-lg md:text-2xl tracking-wider mb-1">
          Previous Video
        </h3>
        <youtube-wrapper
          :video-id="videoIds.prev || ''"
          :fetch-state="$fetchState"
        />
      </div>

      <div class="md-video-player">
        <h3 class="text-center text-lg md:text-2xl tracking-wider mb-1">
          Newborn Video
        </h3>
        <youtube-wrapper
          :video-id="videoIds.curr || ''"
          :fetch-state="$fetchState"
        />
      </div>
    </div>
    <div class="inline-flex w-full justify-center">
      <a
        href="https://www.youtube.com/channel/UClBq509EYyeMgN2wddN5v6g?view_as=subscriber"
        class="btn play-button text-white tracking-wide inline-flex items-center"
        rel="noopener"
        target="_blank"
      >
        Subscribe!
        <svg width="48px" height="48px">
          <use
            xlink:href="~/assets/icons/play_arrow.svg#play-arrow"
            href="~/assets/icons/play_arrow.svg#play-arrow"
          />
        </svg>
      </a>
    </div>
  </section>
</template>

<script>
import youtubeWrapper from '@/components/youtube-wrapper.vue';
export default {
  components: {
    'youtube-wrapper': youtubeWrapper,
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