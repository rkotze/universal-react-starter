const React = require('react');
const { Link } = require('react-router-dom');
const { renderRoutes } = require('react-router-config');

module.exports = function About({ route, children }) {
  return (
    <div>
      <h2>About</h2>
      <p>Here is some text. <Link to="/">Home</Link> <Link to="/about/sub">sub</Link></p>
      {renderRoutes(route.routes)}
    </div>
  )
}