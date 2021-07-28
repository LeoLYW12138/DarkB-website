<template>
  <div class="flex flex-col min-h-screen">
    <nav-bar class="z-50"></nav-bar>
    <nuxt class="flex-grow" />
    <my-footer></my-footer>
  </div>
</template>

<script>
import navBar from '~/components/layout/navBar.vue';
import myFooter from '~/components/layout/myFooter.vue';
export default {
  components: {
    'nav-bar': navBar,
    'my-footer': myFooter,
  },
};
</script>
<style>
html {
  font-family: 'Noto Sans HK', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  overflow-x: hidden;
  min-height: 100vh;
  scroll-behavior: smooth;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.body-font {
  @apply text-base;
}
.header-font {
  @apply text-4xl mt-16 font-bold mb-12;
}
.second-font {
  @apply text-sm;
}
.section-font {
  @apply text-3xl;
}
.tertiary-font {
  @apply text-xs;
}

.nuxt-content-highlight {
  @apply relative;
}

.filename {
  @apply absolute right-2 top-0 text-white text-opacity-40 font-mono;
}
article code {
  @apply bg-emerald-300 p-1 rounded-default font-mono;
  scrollbar-width: thin;
}

article code::before,
article code::after {
  white-space: nowrap;
  content: none !important;
  clear: both;
}

article a {
  @apply underline-transparent;
  text-decoration-color: transparent !important;
}

article a.nuxt-link-active:hover {
  @apply text-emerald-600 underline-current;
  text-decoration-color: currentColor !important;
}

article a:not(.nuxt-link-active):hover {
  text-decoration-color: currentColor !important;
}
</style>
