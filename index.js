const express = require('express');
const app = express();

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

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

