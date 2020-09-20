<template>
  <div class="my-4 lg:my-8 px-2 lg:px-4">
    <div class="container mx-auto">
      <h4 class="text-4xl mt-16 font-bold">Something about me...</h4>
      <div class="my-12">
        <h6 class="text-2xl font-semibold">Who am I ?</h6>
        <div class="pl-5 lg:pl-10 my-6 leading-9">
          <p>Hello, welcome to my site! This is DarkB</p>
          <p>Well, currently I am a University student Hong Kong</p>
        </div>
      </div>
      <div class="my-12">
        <h6 class="text-2xl font-semibold">Why this site ever exists ?</h6>
        <div class="pl-5 lg:pl-10 my-6 leading-9">
          <p>
            One day, I came across a Youtube video titled
            <span
              class="text-xl fugaz"
            >"Vue JS Tutorial"</span>
            and I told to myself
          </p>
          <p class="text-2xl pl-8 lg:pl-16 py-4 font-bold fugaz">I'm gonna make my own website</p>
          <p>Spent about a week or so planning about what will be on my site</p>
          <p>
            I gave it a go and started my first Youtube channel
            <span
              class="text-xl fugaz"
            >DarkB Hello</span>
          </p>
          <p>And that - is my story</p>
        </div>
      </div>
      <div class="my-12">
        <h6 class="text-2xl font-semibold">What I like to do ?</h6>
        <div class="pl-5 lg:pl-10 my-6 leading-9">
          <p>At home, I like to learn new things online, watch Youtube and write codes</p>
          <p>Outside, I like to feel the breeze while running, meet friends, and relax</p>
        </div>
      </div>
      <h3 class="mt-32 w-full text-center text-6xl fugaz">Enjoy!</h3>
    </div>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'About Me',
      meta: [
        {
          hid: 'about',
          name: 'about',
          content: 'Something about me'
        }
      ]

    }
  }
}
</script>
