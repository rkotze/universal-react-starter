const React = require('react');
const { renderRoutes } = require('react-router-config');

function Layout({ route }) {
  return (
    <html>
      <head>
        <title>Universal rendering with react</title>
        <link rel="stylesheet" href="/layout.css" />
      </head>
      <body>
        {renderRoutes(route.routes)}
        <script src="/bundle.js" />
      </body>
    </html>
  )
}

module.exports = Layout;