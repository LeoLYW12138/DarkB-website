<template>
  <footer class="bg-gray-400">
    <div
      class="container flex flex-col flex-wrap mx-auto py-8 items-center justify-between md:flex-row"
    >
      <div class="mx-1 ml-4">
        <nuxtLink to="/">
          <img
            src="~assets/images/DarkB_logo.png"
            alt="DarkB.me"
            title="DarkB.me"
            class="h-auto w-[13rem]"
          />
        </nuxtLink>
      </div>

      <div class="mx-1 py-2 md:py-0">
        <p>&copy; 2020 darkb.me - all rights reserved</p>
      </div>

      <div
        class="rounded-xl flex-row bg-gray-700 mx-1 py-2 inline-flex items-center md:py-0"
      >
        <IconEarth class="h-7.5 ml-4 text-gray-300 w-7.5"></IconEarth>
        <div
          class="rounded-md bg-bray-600 my-1 mr-6 ml-2 p-1 inline-block relative"
        >
          <select
            id="language"
            name="lang"
            class="border-none rounded-md bg-gray-300 leading-tight w-full py-2 px-4 pr-6 tertiary-font block focus:outline-none focus:shadow-outline focus:bg-white appearance-none"
          >
            <option value="en">English</option>
            <option value="zh-hk">中文(香港)</option>
          </select>

          <div
            class="flex px-2 inset-y-0 right-0 text-gray-700 pointer-events-none absolute items-center"
          >
            <svg
              class="h-4 fill-current w-4"
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
        class="flex-row mx-1 py-2 inline-flex items-center justify-evenly md:py-0"
      >
        <a
          href="https://www.youtube.com/channel/UClBq509EYyeMgN2wddN5v6g?disable_polymer=true"
          rel="noopener noreferrer"
          target="_blank"
          class="mx-2 text-gray-600 hover:text-gray-900"
        >
          <IconYoutube class="h-9 w-9"></IconYoutube>
        </a>
        <a
          href="https://github.com/LeoLYW12138"
          rel="noopener noreferrer"
          target="_blank"
          class="mx-2 text-gray-600 hover:text-gray-900"
        >
          <IconGithub class="h-9 w-9"></IconGithub>
        </a>
        <a href class="mx-2 text-gray-600 hover:text-gray-900">
          <IconInstagram class="h-9 w-9"></IconInstagram>
        </a>
        <a href class="mx-2 text-gray-600 hover:text-gray-900">
          <IconFacebook class="h-9 w-9"></IconFacebook>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
import IconEarth from '@/assets/icons/earth.svg?inline';
import IconYoutube from '@/assets/icons/youtube.svg?inline';
import IconGithub from '@/assets/icons/github.svg?inline';
import IconInstagram from '@/assets/icons/instagram.svg?inline';
import IconFacebook from '@/assets/icons/facebook.svg?inline';

export default {
  components: {
    IconEarth,
    IconYoutube,
    IconGithub,
    IconInstagram,
    IconFacebook,
  },
};
</script>