const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Layani file statis dari direktori "public"
app.use(express.static(path.join(__dirname, 'public')));

// Rute untuk melayani file HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
