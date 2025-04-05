const express = require('express');
const app = express();

app.get('/', (req, res) => {
  const target = req.query.redirect || 'https://example.com';
  console.log(`[+] Redirecting to: ${target}`);
  res.redirect(target);
});

app.listen(3000, () => {
  console.log('🌐 Glitch SSRF Redirect Server is running on port 3000');
});