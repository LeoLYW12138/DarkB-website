<template>
  <div class="bg-white shadow-md">
    <!-- whole navBar start -->
    <nav class="flex flex-row h-12 navbar justify-between items-center">
      <!-- left box -->
      <div class="flex-row inline-flex justify-between items-center">
        <nuxt-link to="/">
          <img
            id="logo"
            src="~/assets/images/logo.png"
            alt="Home Page"
            title="Home Page"
          />
        </nuxt-link>
        <nav-item class="hidden lg:inline"></nav-item>
      </div>

      <!-- right box -->
      <ul class="flex-row h-12 inline-flex justify-between items-center">
        <li>
          <div class="clickable">
            <svg height="24px" width="24px" class="icon">
              <use
                xlink:href="~assets/icons/settings.svg#settings"
                href="~assets/icons/settings.svg#settings"
              />
            </svg>
          </div>
        </li>
        <li @click="isDarkThemed = !isDarkThemed">
          <div v-if="isDarkThemed" class="clickable">
            <svg height="24px" width="24px" class="icon">
              <use
                xlink:href="~assets/icons/moon-light.svg#dark"
                href="~assets/icons/moon-light.svg#dark"
              />
            </svg>
          </div>
          <div v-else class="clickable">
            <svg height="24px" width="24px" class="icon">
              <use
                xlink:href="~assets/icons/brightness.svg#light"
                href="~assets/icons/brightness.svg#light"
              />
            </svg>
          </div>
        </li>

        <!-- login and signup -->
        <li class="hidden lg:inline lg:mr-6">
          <a href="#">Login</a>
          <p class="px-1 inline">or</p>
          <a href="#" class="rounded-full shadow py-1 px-3 btn-darkGreen"
            >Sign Up</a
          >
        </li>
        <div class="px-2 block lg:hidden">
          <svg
            height="24px"
            width="24px"
            class="icon clickable"
            @click="openmenu = !openmenu"
          >
            <use
              xlink:href="~assets/icons/hamberger.svg#hamberger"
              href="~assets/icons/hamberger.svg#hamberger"
            />
          </svg>
        </div>
      </ul>
    </nav>
    <!-- whole navBar end -->

    <!-- side-menu when sm and md screen -->
    <aside
      v-if="openmenu"
      class="side-menu-container lg:hidden absolute right-0 bg-gray-400 flex flex-col justify-evenly items-center"
    >
      <li>
        <a href="#" class="btn btn-darkGreen">Sign Up</a>
        <p class="px-1 inline">or</p>
        <a href="#">Login</a>
      </li>
      <nav-item class="navItem"></nav-item>
    </aside>
  </div>
</template>

<script>
import navItem from '@/components/layout/navItem.vue';
export default {
  components: {
    'nav-item': navItem,
  },
  data() {
    return {
      openmenu: false,
      isDarkThemed: false,
      openSearchBar: false,
    };
  },
  watch: {
    $route() {
      this.openmenu = false;
      this.openSearchBar = false;
    },
  },
};
</script>

<style>
* {
  font-family: 'Noto Sans HK', Roboto, Arial, serif;
  font-size: 16px;
  font-weight: 500;
}

.navbar {
  box-shadow: 2px 3px rgba(105, 105, 105, 0.01);
}

.side-menu-container {
  width: 100vw;
  height: calc(100vh - 3rem);
  z-index: 100;
}

.btn {
  @apply px-8 py-2 shadow font-semibold;
  border-radius: 1rem;
}

.btn-darkGreen {
  @apply bg-green-400;
}
.btn-darkGreen:hover {
  @apply bg-green-500;
}

li {
  margin: 0.5rem;
  list-style-type: none;
}

.clickable {
  cursor: pointer;
}

#logo {
  border-radius: 100%;
  max-width: 32px;
  margin-left: 5px;
}

.icon {
  @apply transition ease-in-out duration-300;
}

.icon:hover {
  @apply transform scale-110;
}
</style>