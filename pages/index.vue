<template>
  <div>
    <div class="m-4 lg:m-8 text-gray-900">
      <!-- hero -->
      <hero />

      <!-- scroll down animation -->
      <div class="h-auto my-12">
        <div class="text-center text-lg md:text-2xl">Scroll Down to See More!</div>
        <img
          id="see-more"
          class="mx-auto relative"
          width="48px"
          height="48px"
          src="~assets/icons/expand_more.svg"
          alt="Scroll Down to See More!"
          title="Scroll Down to See More!"
        />
      </div>

      <!-- recommended posts -->
      <blog-posters></blog-posters>

      <!-- latest videos -->
      <latest-video :video-ids="videoIds"></latest-video>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import hero from '@/components/hero.vue';
import blogPosters from '@/components/blog-posters.vue';
import latestVideo from '@/components/latestVideo.vue'

export default {
  components: {
    hero,
    "blog-posters": blogPosters,
    "latest-video": latestVideo
  },
  async asyncData({ $config: { apiKey } }) {
    if (process.server) {
      const API_URL = "https://www.googleapis.com/youtube/v3/search";
      const data = await axios
      .get(API_URL + `?key=${apiKey}&channelId=UClBq509EYyeMgN2wddN5v6g&order=date`)
      .then((res) => {
        return res.data.items.slice(0, 2);
      })
      .catch((err) => {
        console.error(err);
      })
      const videoIds = {'pre': data[1].id.videoId, 'new': data[0].id.videoId};
      // sessionStorage.videoIds = videoIds;
      // sessionStorage.expiry = (Date.now() + 60*60).toLocaleString();
      return {videoIds};
    }
  },
  data() {
    return {
      videoIds: {}
    }
  }
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
