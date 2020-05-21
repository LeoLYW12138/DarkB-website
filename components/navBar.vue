<template>
  <div>
    <header class="navbar">
      <div class="navItem-container">
        <nuxt-link to="/">
          <img src="~/assets/images/logo.png" alt="Home Page" />
        </nuxt-link>
        <nav-item class="navItem hidden lg:inline"></nav-item>
      </div>
      <search-bar></search-bar>
      <ul class="right-menu-bar">
        <li>
          <a href="#">
            <img src="~/assets/images/icons/settings.svg" alt="Settings" />
          </a>
        </li>
        <li>
          <a href="#" class="change_theme" @click="isDarkThemed = !isDarkThemed">
            <img
              v-if="isDarkThemed"
              src="~/assets/images/icons/moon.svg"
              alt="Currently it is in dark theme"
            />
            <img
              v-else
              src="~/assets/images/icons/brightness.svg"
              alt="Current it is in light theme"
            />
          </a>
        </li>
        <li class="hidden lg:inline">
          <a id="login" href="#" class="text-md">Login or</a>
          <a
            id="signup"
            href="#"
            class="whitespace-no-wrap bg-green-600 hover:bg-green-400 px-3 rounded-full py-1"
          >Sign Up</a>
        </li>
        <a href="#" class="px-2 sm:block lg:hidden" @click="openmenu = !openmenu">
          <img src="~assets/images/icons/hamberger.svg" alt="Menu" />
        </a>
      </ul>
    </header>
    <div v-if="openmenu" class="side-menu-container lg:hidden">
      <li>
        <a
          id="signup"
          href="#"
          class="whitespace-no-wrap bg-green-600 hover:bg-green-400 px-3 rounded-full py-1"
        >Sign Up</a>
        <p class="inline px-1">or</p>
        <a id="login" href="#" class="text-md">Login</a>
      </li>

      <nav-item class="navItem"></nav-item>
    </div>
  </div>
</template>

<script>
import searchBar from '@/components/searchBar.vue'
import navItem from '@/components/navItem.vue';
export default {
  components: {
    'search-bar': searchBar,
    'nav-item': navItem
  },
  data () {
    return {
      isDarkThemed: false,
      openmenu: false,
    }
  },
}
</script>

<style>
* {
  font-family: 'Noto Sans HK', serif;
  font-size: 20px;
  font-weight: 500;
}
header {
  width: 100vw;
}

.navbar {
  display: inline-flex;
  position: sticky;
  width: 100%;
  height: 3rem;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid darkgrey;
  box-shadow: 2px 3px rgba(105, 105, 105, 0.01);
}
.right-menu-bar {
  display: inline-flex;
  height: 3rem;
  justify-content: right;
  align-items: center;
}
.navItem-container {
  display: inline-flex;
  height: 3rem;
  justify-content: space-between;
  align-items: center;
}

.side-menu-container {
  position: absolute;
  z-index: 100;
  right: 0;
  width: 100vw;
  height: calc(100vh - 3rem);
  align-items: center;
  @apply bg-gray-400;
  @apply flex flex-col justify-evenly;
}

li {
  margin: 0.5rem;
  list-style-type: none;
}

a:hover {
  @apply text-purple-400;
}
svg {
  display: inline;
}
img {
  border-radius: 100%;
  max-width: 32px;
  margin-left: 5px;
}
</style>
