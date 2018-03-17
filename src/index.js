const React = require('react');
const { Link } = require('react-router-dom');

class Home extends React.Component {
  handleClick() {
    alert('you clicked me');
  }

  render() {
    return (
      <div>
        <h1>Hello world.</h1>
        <p>Server side rendering <Link to="/about">About</Link> </p>
        <button onClick={this.handleClick}>click</button>
      </div>
    );
  }
}

module.exports = Home;