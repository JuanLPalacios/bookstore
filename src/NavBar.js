import './NavBar.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <header className="NavBar">
      <h1>Bookstore</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Books</NavLink>
          </li>
          <li>
            <NavLink to="/Categories">Categories</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
