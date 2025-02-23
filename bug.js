const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // This is an error!  You cannot directly modify the response object like this.
  res.myCustomHeader = 'This will not work';
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});