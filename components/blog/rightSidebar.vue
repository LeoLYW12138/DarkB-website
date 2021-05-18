<template>
  <aside class="px-4">
    <h1
      class="text-lg md:text-xl font-medium md:font-bold md:tracking-wider my-4"
    >
      Content
    </h1>
    <ul>
      <li
        v-for="section in blog.sections"
        :key="section.id"
        class="cursor-pointer hover:(list-outside list-disc text-gray-700) text-gray-400 active:text-gray-700"
      >
        <a :href="'#' + titleShort(section)">
          {{ section.title }}
        </a>
      </li>
    </ul>
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