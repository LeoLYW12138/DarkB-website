<template>
  <footer class="bg-gray-500">
    <div
      class="container mx-auto py-8 flex items-center justify-between flex-col md:flex-row flex-wrap"
    >
      <div class="mx-1">
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

      <div class="mx-1 py-2 md:py-0">
        <p>&copy; 2020 darkb.me - all rights reserved</p>
      </div>

      <div
        class="mx-1 py-2 md:py-0 rounded-xl bg-gray-700 inline-flex flex-row items-center"
      >
        <svg width="30px" height="30px" class="ml-4">
          <use class="text-gray-300" href="~assets/icons/earth.svg#earth" />
        </svg>
        <div
          class="inline-block relative rounded-md bg-bray-600 ml-2 mr-6 my-1 p-1"
        >
          <select
            id="language"
            name="lang"
            class="block appearance-none w-full text-xs bg-gray-300 focus:bg-white px-4 py-2 pr-6 rounded border-none leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="en">English</option>
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
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div
        class="mx-1 py-2 md:py-0 inline-flex flex-row items-center justify-evenly"
      >
        <a
          href="https://www.youtube.com/channel/UClBq509EYyeMgN2wddN5v6g?disable_polymer=true"
          rel="noopener noreferrer"
          target="_blank"
          class="text-gray-600 hover:text-gray-900 mx-2"
        >
          <svg height="36px" width="36px">
            <use href="~assets/icons/youtube.svg#youtube" />
          </svg>
        </a>
        <a
          href="https://github.com/LeoLYW12138"
          rel="noopener noreferrer"
          target="_blank"
          class="text-gray-600 hover:text-gray-900 mx-2"
        >
          <svg height="36px" width="36px">
            <use href="~assets/icons/github.svg#github" />
          </svg>
        </a>
        <a href class="text-gray-600 hover:text-gray-900 mx-2">
          <svg height="36px" width="36px">
            <use href="~assets/icons/instagram.svg#instagram" />
          </svg>
        </a>
        <a href class="text-gray-600 hover:text-gray-900 mx-2">
          <svg height="36px" width="36px">
            <use href="~assets/icons/facebook.svg#facebook" />
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