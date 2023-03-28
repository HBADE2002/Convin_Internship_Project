const express = require('express');
const app = express();

app.use(express.json());

app.post('/api/cards', (req, res) => {
  const cardData = req.body;
  console.log(cardData);
  res.send('Card data received!');
});

app.listen(5000, () => {
  console.log('Server started on port 5000');
});