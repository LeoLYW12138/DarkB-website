<template>
  <div class="mx-auto w-10/12 relative group overflow-hidden">
    <img :src="src" :alt="alt" :title="title" class="shadow-md" />
    <div
      class="bg-white bg-opacity-75 opacity-0 transition-opacity ease-in-out right-0 bottom-0 duration-500 absolute group-hover:opacity-100"
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
      default: 'https://via.placeholder.com/1920x1440',
    },
    alt: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
a {
  @apply text-blue-700 underline;
}
</style>