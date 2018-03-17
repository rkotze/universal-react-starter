import React from 'react';
import ReactDOMServer from 'react-dom/server';
import StaticRouter from 'react-router-dom/StaticRouter';
import { renderRoutes } from 'react-router-config';

import routes from './src/routes';

const start = (req, res) => {
  let context = {};
  const html = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      {renderRoutes(routes)}
    </StaticRouter>
  );

  if (context.status === 404)
    res.status(404);

  res.send(html);
};

export { start };