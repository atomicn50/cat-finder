import express from 'express';

const app = express();
const PORT = 8000;

app.get('/', (req, res) => {
  res.send('will you be mine');
});

app.listen(PORT, () => {
  console.log('hello arez')
});