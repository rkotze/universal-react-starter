const React = require('react');
const ReactDOM = require('react-dom');

import BrowserRouter from 'react-router-dom/BrowserRouter';
import { renderRoutes } from 'react-router-config';

import routes from './src/routes';

const AppRouter = () => {
  return (
    <BrowserRouter>
      {renderRoutes(routes)}
    </BrowserRouter>
  )
}

ReactDOM.render(
  <AppRouter />, document
);