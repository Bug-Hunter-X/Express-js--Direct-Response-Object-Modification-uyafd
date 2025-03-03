const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Correct way to add a custom header
  res.setHeader('My-Custom-Header', 'This will work');
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});