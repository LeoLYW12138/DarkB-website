<template>
  <div class="m-4 lg:m-8 text-gray-900">
    <!-- hero -->
    <hero />

    <!-- scroll down animation -->
    <div class="h-auto my-12">
      <div class="text-center text-lg md:text-2xl">Scroll Down to See More</div>
      <img
        id="see-more"
        class="mx-auto relative"
        width="48px"
        height="48px"
        src="~assets/images/icons/expand_more.svg"
        alt="Scroll Down to See More!"
        title="Scroll Down to See More!"
      />
    </div>

    <!-- recommended posts -->
    <blog-posters></blog-posters>

    <!-- latest videos -->
    <latest-video :video-ids="videoIds"></latest-video>
  </div>
</template>

<script>
import axios from 'axios'
import hero from '@/components/hero.vue';
import blogPosters from '@/components/blog-posters.vue';
import latestVideo from '@/components/latestVideo.vue'

export default {
  components: {
    hero,
    "blog-posters": blogPosters,
    "latest-video": latestVideo
  },
  async asyncData(context) {
    const API_URL = "https://www.googleapis.com/youtube/v3/search"
    const data = await axios
    .get(API_URL + "?key=AIzaSyBW0gJOgzwxKPDGsoQ17KHQM9y1gnjI3-8&channelId=UClBq509EYyeMgN2wddN5v6g&order=date")
    .then((res) => {
      return res.data.items.slice(0, 2); // Take the first two elements
    })
    .catch((err) => {
      console.error(err)
    })
    return {videoIds: {'pre': data[1].id.videoId, 'new': data[0].id.videoId}} // Get the two videoIds from the data
  },
};

</script>

<style>
body {
  font-family: 'Noto Sans HK', Roboto, Arial, Helvetica, sans-serif;
  background-color: whitesmoke;
}

.btn-lightGreen {
  background-color: #b0fe76;
}
.btn-lightGreen:hover {
  background-color: #81e979;
}

@keyframes UpandDown {
  0% {
    top: 0;
  }
  50% {
    top: 3rem;
  }
  100% {
    top: 0;
  }
}

#see-more {
  animation-name: UpandDown;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}
</style>
