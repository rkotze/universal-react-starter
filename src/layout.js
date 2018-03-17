import React from 'react';
import { renderRoutes } from 'react-router-config';

function Layout({ route }) {
  return (
    <html>
      <head>
        <title>Universal rendering with react</title>
        <link rel="stylesheet" href="/layout.css" />
      </head>
      <body>
        <h1>Universal app</h1>
        {renderRoutes(route.routes)}
        <script src="/bundle.js" />
      </body>
    </html>
  )
}

export default Layout;