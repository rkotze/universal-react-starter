const React = require('react');
const { Link } = require('react-router-dom');

module.exports = function () {

  return (
    <div>
      <h2>About</h2>
      <p>Here is some text. <Link to="/">Home</Link></p>
    </div>
  )
}