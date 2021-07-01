<template>
  <a
    :href="href"
    rel="noopener noreferrer"
    target="_blank"
    class="mx-auto md:mx-0"
    :class="{ disabled: disabled }"
  >
    <slot></slot>
    <p :data-content="text">{{ text }}</p>
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: '#',
    },
    text: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
p {
  @apply relative underline overflow-hidden text-center;
}
p::before {
  content: attr(data-content);
  @apply absolute w-0 bottom-0 text-center left-1/2 text-blue-700 underline overflow-hidden whitespace-nowrap;
  transition: width 300ms ease;
  transform: translateX(-50%);
}
:not(.disabled) > a:hover p::before {
  width: 100%;
}
.disabled {
  @apply text-gray-400 pointer-events-none !important;
}
</style>