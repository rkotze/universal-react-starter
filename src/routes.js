const Layout = require('./layout');
const Home = require('./');
const About = require('./about');

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
        component: About
      }
    ]
  }
];

module.exports = routes;