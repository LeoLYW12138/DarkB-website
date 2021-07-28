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
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.fugaz {
  font-family: 'Fugaz One', 'Noto Sans HK', Roboto, sans-serif;
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
</style>
