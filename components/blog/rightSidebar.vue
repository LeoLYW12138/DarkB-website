<template>
  <aside class="px-4">
    <div class="pl-4 top-5 bottom-5 sticky overflow-y-auto">
      <h1
        class="text-lg font-medium md:(text-xl font-bold tracking-wider) my-4"
      >
        Content
      </h1>
      <ul class="list-outside">
        <li
          v-for="section in blog.sections"
          :key="section.id"
          class="cursor-pointer hover:(list-disc text-gray-700) text-gray-400"
        >
          <a :href="'#' + titleShort(section)">
            {{ section.title }}
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import titleShort from '@/mixins/titleShort';
export default {
  mixins: [titleShort],
  props: {
    blog: {
      type: Object,
      default: () => {},
    },
  },
};
</script>

<style scoped>
</style>