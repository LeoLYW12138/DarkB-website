<template>
  <div class="relative group overflow-hidden">
    <img :src="src" :alt="alt" :title="title" class="shadow-md" />
    <div
      class="transition-opacity duration-500 ease-in-out absolute right-0 bottom-0 bg-opacity-75 bg-white opacity-0 group-hover:opacity-100"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      src: {
        type: String,
        default: "https://via.placeholder.com/1920x1440"
      },
      alt: {
        type: String,
        default: ""
      },
      title: {
        type: String,
        default: ""
      }
    }
  }
</script>

<style scoped>
a {
  @apply text-blue-700 underline;
}
</style>