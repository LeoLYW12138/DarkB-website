<template>
  <div>
    <header class="navbar">
      <div class="navItem-container">
        <img src="~/assets/images/logo.png" alt="Home Page" />
        <ul class="navItem">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <form class="searchBar group focus:bg-white-400 bg-gray-300 rounded-full pl-3 pr-12">
        <img class="inline fill-current" src="~/assets/images/icons/search.svg" alt="Search" />
        <input
          class="bg-gray-300 group-focus:bg-white-400"
          type="text"
          id="searchBar"
          name="searchBar"
          placeholder="Search (Press '/' to focus)"
        />
      </form>
      <img class="sm:block lg:hidden" src="~assets/images/icons/hamberger.svg" alt="Menu" />
      <ul class="sideBar">
        <li>
          <a href="#">
            <img src="~/assets/images/icons/settings.svg" alt="Settings" />
          </a>
        </li>
        <li>
          <a href="#" @click="isDarkThemed = !isDarkThemed" class="change_theme">
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
        <li>
          <a href="#" class="text-lg">Login or</a>
        </li>
        <li>
          <a href="#" class="bg-green-600 hover:bg-green-400 px-3 rounded-full py-1">Sign Up</a>
        </li>
      </ul>
    </header>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isDarkThemed: false
    }
  }
}
</script>

<style scoped>
* {
  font-family: 'Noto Sans HK', serif;
  font-size: 20px;
  font-weight: 500;
}
svg {
  display: inline;
}
img {
  border-radius: 100%;
  max-width: 32px;
  margin-left: 5px;
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
.sideBar {
  display: inline-flex;
  height: 3rem;
  justify-content: space-between;
  align-items: center;
}
.navItem-container {
  @apply sideBar;
}

li {
  display: inline;
  margin: 1rem;
}
</style>
