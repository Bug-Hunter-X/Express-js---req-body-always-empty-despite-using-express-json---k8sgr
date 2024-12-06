const express = require('express');
const app = express();
// Middleware must be placed BEFORE route handlers
app.use(express.json());
app.post('/data', (req, res) => {
  console.log(req.body); // req.body will now contain the JSON data
  res.send('OK');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});