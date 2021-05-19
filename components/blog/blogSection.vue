<template>
  <section :id="titleShort(section)">
    <div>
      <h3 class="mb-2 section-font inline-block">{{ section.title }}</h3>
    </div>
    <p class="max-w-[60ch] pl-4">{{ section.content }}</p>
  </section>
</template>

<script>
import titleShort from '@/mixins/titleShort';
export default {
  mixins: [titleShort],
  props: {
    section: {
      type: Object,
      validator: (section) => section.title,
      default: () => {},
    },
  },
};
</script>

<style scoped>
</style>