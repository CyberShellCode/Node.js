const express = require('express');
const app = express();

app.get('*', (req, res) => {
  const target = req.query.url || req.query.callback || req.query.redirect || req.query.next || req.query.return_url;
  if (target) {
    console.log('Redirecting to:', target);
    res.redirect(target);
  } else {
    res.send('👋 Glitch SSRF Redirect Server is Running');
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`SSRF redirector live on port ${port}`);
});
