import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="navbar-nav">
      <div className="nav-logo">
        <Link to="/">Math Magicians</Link>
      </div>
      <div className="nav-item">
        <Link to="/">Home</Link>

        <Link to="/calculator">Calculator</Link>

        <Link to="/quotes">Quotes</Link>
      </div>
    </nav>

  );
}
