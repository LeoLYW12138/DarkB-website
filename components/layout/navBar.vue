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
        <navItem class="hidden lg:inline"></navItem>
      </div>

      <!-- right box -->
      <ul class="flex-row h-12 inline-flex justify-between items-center">
        <li>
          <div class="clickable">
            <IconSettings class="h-6 w-6 icon"></IconSettings>
          </div>
        </li>
        <li @click="isDarkThemed = !isDarkThemed">
          <div v-if="isDarkThemed" class="clickable">
            <IconMoonLight class="h-6 w-6 icon"></IconMoonLight>
          </div>
          <div v-else class="clickable">
            <IconBrightness class="h-6 w-6 icon"></IconBrightness>
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
          <IconHamberger
            class="h-6 w-6 icon clickable"
            @click="openmenu = !openmenu"
          ></IconHamberger>
        </div>
      </ul>
    </nav>
    <!-- whole navBar end -->

    <!-- side-menu when sm and md screen -->
    <aside
      v-if="openmenu"
      class="flex flex-col bg-gray-400 right-0 side-menu-container lg:hidden absolute justify-evenly items-center"
    >
      <li>
        <a href="#" class="btn btn-darkGreen">Sign Up</a>
        <p class="px-1 inline">or</p>
        <a href="#">Login</a>
      </li>
      <navItem class="navItem"></navItem>
    </aside>
  </div>
</template>

<script>
import navItem from '@/components/layout/navItem.vue';
import IconSettings from '@/assets/icons/settings.svg?inline';
import IconMoonLight from '@/assets/icons/moon-light.svg?inline';
import IconBrightness from '@/assets/icons/brightness.svg?inline';
import IconHamberger from '@/assets/icons/hamberger.svg?inline';

export default {
  components: {
    navItem,
    IconSettings,
    IconMoonLight,
    IconBrightness,
    IconHamberger,
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