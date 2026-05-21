const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/images', express.static(path.join(__dirname, 'images')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Apollo_11.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
