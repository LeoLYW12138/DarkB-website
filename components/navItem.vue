<template>
  <div>
    <ul class="flex flex-col flex-grow lg:flex-row justify-around align-center">
      <li>
        <nuxt-link to="/about">About</nuxt-link>
      </li>
      <li>
        <a href="#">Blog</a>
      </li>
      <li>
        <a href="#">Contact</a>
      </li>
    </ul>
  </div>
</template>

<style>
li {
  /* display: inline; */
  @apply mx-2;
}
</style>
