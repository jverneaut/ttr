const express = require('express');
const helmet = require('helmet');

const app = express();

app.use(helmet());
app.use(express.static('public'));

app.get('/api', (req, res) => {
  res.json({
    posts: [
      { titre: 'Post 1' },
      { titre: 'Post 2' },
      { titre: 'Post 3' },
    ]
  });
});

app.get('/time', (req, res) => {
  res.json({
    time: Date.now()
  });
});

const port = process.env.PORT || 3000;
app.listen(port);

