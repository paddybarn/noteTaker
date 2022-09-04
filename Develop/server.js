const express = require('express');
const api = require('./routes/indexhtml');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', api);

// app.use(express.static('public'));

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/notes.html'))
);

app.get('/api/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/notes.html'))
);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });