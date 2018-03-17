require('babel-register')({
  presets: ['react']
});

const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Home = require('./src');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  const html = ReactDOMServer.renderToString(
    React.createElement(Home)
  );
  res.send(html);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log('http://localhost:' + PORT);
});