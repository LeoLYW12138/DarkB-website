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
        <div
          class="relative w-full h-full mb-10 overflow-hidden shadow-lg"
          style="padding-top: 56.25%"
        >
          <client-only placeholder="Loading previous video">
            <youtube
              ref="preVdo"
              class="absolute inset-0 w-full h-full"
              :video-id="videoIds['pre']"
              allow="encrypted-media; gyroscope; picture-in-picture"
              nocookie
            ></youtube>
          </client-only>
        </div>
      </div>
      <div class="md-video-player">
        <h3 class="text-center text-lg md:text-2xl tracking-wider mb-1">
          Newborn Video
        </h3>
        <div
          class="relative w-full h-full mb-8 overflow-hidden shadow-xl"
          style="padding-top: 56.25%"
        >
          <client-only placeholder="Loading new video">
            <youtube
              ref="newVdo"
              class="absolute inset-0 w-full h-full"
              :video-id="videoIds['new']"
              allow="encrypted-media; gyroscope; picture-in-picture"
              nocookie
            ></youtube>
          </client-only>
        </div>
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
            xlink:href="~assets/icons/play_arrow.svg#play-arrow"
            href="~assets/icons/play_arrow.svg#play-arrow"
          />
        </svg>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    videoIds: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      // videoIds: {'pre': "ZanubNpTzeU", 'new': "cccbTNKKVxk"}
    }
  },
}
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