<template>
  <div
    class="relative w-full h-full mb-10 overflow-hidden shadow-lg"
    style="padding-top: 56.25%"
  >
    <p v-if="fetchState.pending">Pending: {{ fetchState.pendingMsg }}</p>
    <p v-else-if="fetchState.error">Error: {{ fetchState.error.message }}</p>
    <div v-else>
      <youtube
        class="absolute inset-0 w-full h-full"
        :video-id="videoId"
        allow="encrypted-media; gyroscope; picture-in-picture"
        nocookie
      ></youtube>
    </div>
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