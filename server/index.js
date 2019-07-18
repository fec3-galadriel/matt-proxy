const express = require('express');
const httpProxy = require('http-proxy');

const app = express();
const PORT = '3000';
const proxy = httpProxy.createProxyServer();

app.use('/:id', express.static('./public'));

app.all('/api/photos/:id', (req, res) => {
  proxy.web(req, res, { target: 'http://localhost:3001'});
});

app.all('/api/itemSummary/:id', (req, res) => {
  proxy.web(req, res, { target: 'http://localhost:3002' });
})

app.all('/api/product/:pid', (req, res) => {
  proxy.web(req, res, { target: 'http://localhost:3003' });
})

app.all('/api/reviews/:id', (req, res) => {
  proxy.web(req, res, { target: 'http://localhost:3004' })
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

