const Layout = require('./layout');
const Home = require('./');
const About = require('./about');
const Sub = require('./sub');
const NotFound = require('./not-found');

const routes = [
  {
    component: Layout,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home
      },
      {
        path: '/about',
        component: About,
        routes: [
          {
            path: '/about/sub',
            component: Sub,
          }
        ]
      },
      {
        path: '*',
        component: NotFound
      }
    ]
  }
];

module.exports = routes;