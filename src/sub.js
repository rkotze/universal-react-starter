const React = require('react');
const { Link } = require('react-router-dom');

function Sub() {
  console.log('IM HIT');

  return (
    <div>
      <h2>Sub</h2>
      <p>Sublink. <Link to="/">Home</Link></p>
    </div>
  );
}
module.exports = Sub;