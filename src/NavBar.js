import './NavBar.css';
import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <>
      <header className="Navbar panel-bg">
        <span className="Bookstore-CMS"> Bookstore CMS </span>
        <nav>
          <NavLink className="BOOKS Text-Style-3" to="/">BOOKS</NavLink>
          <NavLink className="CATEGORIES Text-Style-3" to="/Categories">CATEGORIES</NavLink>
        </nav>
        <div className="Oval">
          <BsFillPersonFill className="Mask" color="var(--azure)" />
        </div>
      </header>
      <div className="Line" />
    </>
  );
}
