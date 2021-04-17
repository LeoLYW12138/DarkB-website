<template>
  <div class="my-4 lg:my-8 px-2 lg:px-4">
    <div class="container mx-auto">
      <h4 data-aos="zoom-out" class="text-4xl mt-16 font-bold mb-12">
        Something about me...
      </h4>
      <img-with-credit
        :src="require('~/assets/images/about1.jpg')"
        alt="Photo of a university"
        title="Photo of a university"
      >
        <span
          >Photo by
          <a
            href="https://unsplash.com/@ribhav17?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
            >Ribhav Kala</a
          >
          on
          <a
            href="https://unsplash.com/s/photos/hk-university?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
            >Unsplash</a
          ></span
        >
      </img-with-credit>
      <div data-aos="fade-up-right" class="my-12">
        <h6 class="text-2xl font-semibold">Who am I ?</h6>
        <div class="pl-5 lg:pl-10 my-6 leading-9">
          <p>Hello, welcome to my site! This is DarkB</p>
          <p>Well, currently I am a University student in Hong Kong</p>
        </div>
      </div>
      <img-with-credit
        :src="require('~/assets/images/about2.jpg')"
        alt="Photo of a typewriter"
        title="Photo of a typewriter"
      >
        <span
          >Photo by
          <a
            href="https://unsplash.com/@markuswinkler?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
            >Markus Winkler</a
          >
          on
          <a
            href="https://unsplash.com/s/photos/tutorial?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
            >Unsplash</a
          ></span
        >
      </img-with-credit>
      <div data-aos="fade-up-left" class="my-12 float-right">
        <h6 class="text-2xl font-semibold">Why this site ever exists ?</h6>
        <div class="pl-5 lg:pl-10 my-6 leading-9">
          <p>
            One day, I came across a Youtube video titled
            <span class="text-xl fugaz">"Vue JS Tutorial"</span>
            and I told to myself
          </p>
          <p
            data-aos="zoom-in"
            data-aos-duration="2000"
            class="text-2xl pl-8 lg:pl-16 py-4 font-bold fugaz"
          >
            I'm gonna make my own website
          </p>
          <p>Spent about a week or so planning about what will be on my site</p>
          <p>
            I gave it a go and started my first Youtube channel
            <span class="text-xl fugaz">DarkB Hello</span>
          </p>
          <p>And that - is my story</p>
        </div>
      </div>
      <p class="clear-both"></p>
      <img-with-credit
        :src="require('~/assets/images/about3.jpg')"
        alt="Photo of a man running"
        title="Photo of a man running"
      >
        <span
          >Photo by
          <a
            href="https://unsplash.com/@chanderr?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
            >Chander R</a
          >
          on
          <a
            href="https://unsplash.com/s/photos/jogging?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText"
            >Unsplash</a
          >
        </span>
      </img-with-credit>
      <div data-aos="fade-up-right" class="my-12">
        <h6 class="text-2xl font-semibold">What I like to do ?</h6>
        <div class="pl-5 lg:pl-10 my-6 leading-9">
          <p>
            At home, I like to learn new things online, watch Youtube and write
            codes
          </p>
          <p>
            Outside, I like to feel the breeze while running, meet friends, and
            relax
          </p>
        </div>
      </div>
      <h3
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        class="mt-32 w-full text-center text-6xl fugaz"
      >
        Enjoy!
      </h3>
    </div>
  </div>
</template>

<script>
import imgWithCredit from '@/components/img-with-credit.vue';
export default {
  components: {
    'img-with-credit': imgWithCredit,
  },
  head() {
    return {
      title: 'About Me',
      meta: [
        {
          hid: 'about',
          name: 'about',
          content: 'Something about me',
        },
      ],
    };
  },
};
</script>
<style scoped>
</style>