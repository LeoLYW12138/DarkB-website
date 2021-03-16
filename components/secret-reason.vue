<template>
  <div>
    <h5 class="text-lg">
      <span class="text-xl fugaz" :class="customClass">{{ highlight }}</span
      >{{ title }}
    </h5>
    <p class="ml-4 text-lg">{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    titleHighlight: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    customClass: {
      type: String,
      default: '',
    },
  },
  computed: {
    highlight() {
      return this.titleHighlight ? this.titleHighlight + ' - ' : ''
    },
  },
}
</script>