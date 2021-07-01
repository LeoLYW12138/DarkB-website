const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');

app.use(
  cors({
    origin: ['http://leowong12138.tplinkdns.com', 'http://192.168.0.161:3000'],
    credentials: true
  })
);

app.get('/', (req, res) => {
  res.send('hello, world');
});

app.get('/latest-video', async (req, res) => {
  const API_URL = 'https://www.googleapis.com/youtube/v3/search';
  const API_KEY = process.env.YOUTUBE_KEY;
  const CHANNEL_ID = 'UClBq509EYyeMgN2wddN5v6g';
  const LIMIT = req.query.limit || 2;
  await axios
    .get(
      `${API_URL}?key=${API_KEY}&channelId=${CHANNEL_ID}&order=date&maxResults=${LIMIT}`
    )
    .then(res => {
      return res.data.items;
    })
    .then(data => {
      const videoIds = [];
      data.map(item => {
        videoIds.push(item.id.videoId);
      });
      res.json({ videoIds });
    })
    .catch(err => {
      console.error(err);
    });
});

export default {
  path: '/api/',
  handler: app
};
