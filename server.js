const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 8080

app.use(express.static(path.join(__dirname, 'angular-src/dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'angular-src/dist/index.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'angular-src/dist/index.html'));
});

app.listen(port, () => {
  console.log('Server started on port ' + port);
})
