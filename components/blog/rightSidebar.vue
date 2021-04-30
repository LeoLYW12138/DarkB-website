<template>
  <aside class="px-4">
    <h1
      class="text-lg md:text-xl font-medium md:font-bold md:tracking-wider my-4"
    >
      Table of Content
    </h1>
    <ul>
      <li
        v-for="section in blog.sections"
        :key="section.id"
        class="list-outside list-disc"
      >
        {{ section.title }}
      </li>
    </ul>
  </aside>
</template>

<script>
export default {
  props: {
    blog: {
      type: Object,
      default: () => {},
    },
  },
};
</script>