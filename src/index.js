const React = require('react');

class Home extends React.Component {
  handleClick() {
    alert('you clicked me');
  }

  render() {
    return (
      <html>
        <head>
          <title>Universal rendering with react</title>
          <link rel="stylesheet" href="/layout.css" />
        </head>
        <body>
          <div>
            <h1>Hello world.</h1>
            <p>server side rendering</p>
            <button onClick={this.handleClick}>click</button>
          </div>
        </body>
      </html>
    );
  }
}

module.exports = Home;