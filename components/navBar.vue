<template>
  <div>
    <!-- whole navBar start -->
    <header class="navbar h-12 w-screen inline-flex flex-row justify-between items-center">
      <!-- left box -->
      <div class="inline-flex flex-row justify-between items-center">
        <img src="~/assets/images/logo.png" alt="Home Page" />
        <nav-item class="hidden lg:inline"></nav-item>
      </div>

      <!-- middle box -->
      <search-bar></search-bar>

      <!-- right box -->
      <ul class="h-12 inline-flex flex-row justify-between items-center">
        <li>
          <a href="#">
            <img src="~assets/images/icons/settings.svg" alt="Settinges" />
          </a>
        </li>
        <li @click="isDarkThemed = !isDarkThemed">
          <a v-if="isDarkThemed" href="#">
            <img src="~/assets/images/icons/moon.svg" alt="Currently it is in dark theme" />
          </a>
          <a v-else href="#">
            <img src="~/assets/images/icons/brightness.svg" alt="Currently it is in light theme" />
          </a>
        </li>

        <!-- login and signup -->
        <li class="hidden lg:inline">
          <a href="#">Login</a>
          <p class="inline px-1">or</p>
          <a href="#" class="bg-green-600 hover:bg-green-400 px-3 py-1 rounded-full">Sign Up</a>
        </li>
        <a href="#" class="px-2 block lg:hidden">
          <img
            src="~assets/images/icons/hamberger.svg"
            alt="side menu"
            @click="openmenu = !openmenu"
          />
        </a>
      </ul>
    </header>
    <!-- whole navBar end -->

    <!-- side-menu when sm and md screen -->
    <div
      v-if="openmenu"
      class="side-menu-container lg:hidden absolute right-0 bg-gray-400 flex flex-col justify-evenly items-center"
    >
      <li>
        <a href="#" class="bg-green-600 hover:bg-green-400 px-3 rounded-full py-1">Sign Up</a>
        <p class="inline px-1">or</p>
        <a href="#">Login</a>
      </li>
      <nav-item class="navItem"></nav-item>
    </div>
  </div>
</template>

<script>
import navItem from '@/components/navItem.vue';
import searchBar from '@/components/searchBar.vue';
    export default {
      components: {
        'nav-item': navItem,
        'search-bar': searchBar
      },
      data() {
        return {
          openmenu: false,
          isDarkThemed: false
        }
      },
    }
</script>

<style>
* {
  font-family: 'Noto Sans HK', Roboto, Arial, serif;
  font-size: 16px;
  font-weight: 500;
}

.navbar {
  border-bottom: 1px solid darkgrey;
  box-shadow: 2px 3px rgba(105, 105, 105, 0.01);
}

.side-menu-container {
  width: 100vw;
  height: calc(100vh - 3rem);
}

li {
  margin: 0.5rem;
  list-style-type: none;
}

img {
  border-radius: 100%;
  max-width: 32px;
  margin-left: 5px;
}
</style>