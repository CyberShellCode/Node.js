
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('🌊 Glitch SSRF Redirect Server is Running');
});

app.get('/redirect', (req, res) => {
  const target = req.query.url;
  if (!target) return res.status(400).send('Missing url parameter');
  res.redirect(target);
});

app.listen(PORT, () => {
  console.log(`🚀 SSRF redirector running on port ${PORT}`);
});
