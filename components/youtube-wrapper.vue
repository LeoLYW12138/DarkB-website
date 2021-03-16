<template>
  <div
    class="relative w-full h-full mb-10 overflow-hidden shadow-lg"
    style="padding-top: 56.25%"
  >
    <p v-if="fetchState.pending">{{ fetchState.pendingMsg }}</p>
    <p v-else-if="fetchState.error">{{ fetchState.errorMsg }}</p>
    <div v-else></div>
    <youtube
      class="absolute inset-0 w-full h-full"
      :video-id="videoId"
      allow="encrypted-media; gyroscope; picture-in-picture"
      nocookie
    ></youtube>
  </div>
</template>

<script>
export default {
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
}
</script>