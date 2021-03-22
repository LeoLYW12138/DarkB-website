const express = require('express');
const app = express();
const axios = require('axios');

app.get('/', (req, res) => {
  res.send('hello, world');
});

app.get('/latest-video', async (req, res) => {
  const API_URL = 'https://www.googleapis.com/youtube/v3/search';
  const API_KEY = process.env.YOUTUBE_KEY;
  const CHANNEL_ID = 'UClBq509EYyeMgN2wddN5v6g';
  const LIMIT = req.query.limit || 2;
  const data = await axios
    .get(
      `${API_URL}?key=${API_KEY}&channelId=${CHANNEL_ID}&order=date&maxResults=${LIMIT}`
    )
    .then(res => {
      return res.data.items;
    })
    .catch(err => {
      console.error(err);
    });
  const videoIds = [];
  data.map(item => {
    videoIds.push(item.id.videoId);
  });
  res.json({ videoIds });
});

export default {
  path: '/api/',
  handler: app
};
