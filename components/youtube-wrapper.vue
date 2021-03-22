<template>
  <div
    class="relative w-full h-full mb-10 overflow-hidden shadow-lg"
    style="padding-top: 56.25%"
  >
    <p v-if="fetchState.pending">Pending: Loading video</p>
    <p v-else-if="fetchState.error">
      Error: Error when loading the video. Please try again!
    </p>
    <div v-else>
      <client-only>
        <youtube
          class="absolute inset-0 w-full h-full"
          :video-id="videoId"
          allow="encrypted-media; gyroscope; picture-in-picture"
          nocookie
        ></youtube>
      </client-only>
    </div>
  </div>
</template>

<script>
import { Youtube } from 'vue-youtube';
export default {
  components: {
    Youtube,
  },
  props: {
    videoId: {
      type: String,
      required: true,
    },
    fetchState: {
      type: Object,
      required: true,
    },
  },
  computed: {
    src() {
      return 'https://www.youtube-nocookie.com/embed/' + this.videoId;
    },
  },
};
</script>