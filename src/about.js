import React from 'react';
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

export default function About({ route, children }) {
  return (
    <div>
      <h2>About</h2>
      <p>Here is some text. <Link to="/">Home</Link> <Link to="/about/sub">sub</Link></p>
      {renderRoutes(route.routes)}
    </div>
  )
}