const React = require('react');
const { Route } = require('react-router-dom');

const NotFound = () => {
  return (
    <Route render={({ staticContext }) => {
      if (staticContext) {
        staticContext.status = 404;
      }
      return (
        <div>
          <h1>404 : Not Found</h1>
        </div>
      )
    }} />
  );
};

module.exports = NotFound;