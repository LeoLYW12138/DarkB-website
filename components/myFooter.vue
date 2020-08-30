<template>
  <footer class="bg-gray-500">
    <div class="container mx-auto py-8 flex items-center justify-between flex-col md:flex-row">
      <div class="py-2 md:py-0 flex item-center justify-center">
        <nuxtLink to="/">
          <img
            src="~assets/images/DarkB_logo.png"
            alt="DarkB.me"
            title="DarkB.me"
            width="200px"
            height="auto"
          />
        </nuxtLink>
      </div>
      <p class="py-2 md:py-0">&copy; 2020 darkb.me - all rights reserved</p>
      <div class="py-2 md:py-0 rounded-xl bg-gray-700 inline-flex flex-row items-center">
        <svg height="30px" width="30px" class="ml-2">
          <use href="~assets/images/icons/earth.svg#earth" />
        </svg>
        <div class="inline-block relative rounded-md ml-4 mr-8 my-2 p-1 bg-gray-600">
          <select
            id="language"
            name="lang"
            class="block appearance-none w-full text-xs bg-gray-300 focus:bg-white px-4 py-2 pr-8 rounded border-none leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="en" selected>English</option>
            <option value="zh-hk">中文(香港)</option>
          </select>
          <div
            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
          >
            <svg
              class="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
      <div class="py-2 md:py-0 inline-flex flex-row items-center justify-evenly">
        <a href class="text-gray-600 hover:text-gray-900 mx-2">
          <svg height="36px" width="36px">
            <use href="~assets/images/icons/youtube.svg#youtube" />
          </svg>
        </a>
        <a href class="text-gray-600 hover:text-gray-900 mx-2">
          <svg height="36px" width="36px">
            <use href="~assets/images/icons/github.svg#github" />
          </svg>
        </a>
        <a href class="text-gray-600 hover:text-gray-900 mx-2">
          <svg height="36px" width="36px">
            <use href="~assets/images/icons/instagram.svg#instagram" />
          </svg>
        </a>
        <a href class="text-gray-600 hover:text-gray-900 mx-2">
          <svg height="36px" width="36px">
            <use href="~assets/images/icons/facebook.svg#facebook" />
          </svg>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
</style>