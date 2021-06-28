<template>
  <aside class="px-4">
    <div class="pl-4 top-5 bottom-5 sticky overflow-y-auto">
      <h1
        class="font-medium my-4 text-lg md:(text-xl font-bold tracking-wider)"
      >
        Content
      </h1>
      <ul v-if="blog" class="list-outside">
        <!-- <li
          v-for="section in blog.sections"
          :key="section.id"
          class="cursor-pointer text-gray-400 hover:(list-disc text-gray-700)"
        >
          <a :href="'#' + titleShort(section)">
            {{ section.title }}
          </a>
        </li> -->
        <li
          v-for="link of blog.toc"
          :key="link.id"
          class="cursor-pointer text-gray-400 hover:(list-disc text-gray-700)"
          :class="{ toc2: link.depth == 2, toc3: link.depth == 3 }"
        >
          <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
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