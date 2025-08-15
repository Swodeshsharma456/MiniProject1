const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const reviews = require('./data/reviews.json');

//to get static files : html, css, js, media
app.use(express.static(path.join(__dirname, 'public')));


// API that send JSON to user
app.get('/api/reviews', (req, res) => {
  res.json(reviews);
});

//to initialize the server
app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`)
})
