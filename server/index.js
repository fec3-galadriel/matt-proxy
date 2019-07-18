const express = require('express');
const httpProxy = require('http-proxy');

const app = express();
const PORT = '3000';
const proxy = httpProxy.createProxyServer();

app.use('/:id', express.static('./public'));

app.all('/api/photos/:id', (req, res) => {
  console.log('connection to photos successful');
  proxy.web(req, res, { target: 'http://localhost:3001'});
});

app.all('/api/itemSummary/:id', (req, res) => {
  console.log('connection to itemSumamry succesful');
  proxy.web(req, res, { target: 'http://localhost:3002' });
})

app.all('/api/relatedProducts/:id', (req, res) => {
  proxy.web(req, res, { target: 'http://localhost:3003' });
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

