require('babel-register')({
  presets: ['react']
});

const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const StaticRouter = require('react-router-dom/StaticRouter').default;
const { renderRoutes } = require('react-router-config');

const routes = require('./src/routes');

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  let context = {};
  const html = ReactDOMServer.renderToString(
    React.createElement(StaticRouter, {
      location: req.url,
      context: context
    },
      renderRoutes(routes))
  );

  if (context.status === 404)
    res.status(404);

  res.send(html);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log('http://localhost:' + PORT);
});