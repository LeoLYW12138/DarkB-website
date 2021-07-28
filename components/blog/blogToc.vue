<template>
  <aside class="px-4 -ml-3">
    <div class="pb-4 pl-6 top-5 bottom-5 sticky overflow-y-auto bg-white rounded-md shadow-lg">
      <h1 class="font-medium my-4 text-lg md:(text-xl font-bold tracking-wider)">
        <NuxtLink to="#">Content</NuxtLink>
      </h1>
      <ul v-if="toc" class="list-outside">
        <li
          v-for="link of toc"
          :key="link.id"
          class="cursor-pointer text-gray-400 hover:(list-disc text-gray-700)"
          :class="{ toc2: link.depth == 2, 'pl-2': link.depth == 3 }"
        >
          <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  props: {
    toc: {
      type: Array,
      default: () => {},
    },
  },
};
</script>