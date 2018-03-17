const React = require('react');
const { Link } = require('react-router-dom');

function Sub() {
  return (
    <div>
      <h2>Sub over here</h2>
      <p>Sublink. <Link to="/">Home</Link></p>
    </div>
  );
}
module.exports = Sub;