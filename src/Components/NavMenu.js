import React from 'react';
import { Link } from 'react-router-dom';

const NavMenu = props =>
    <nav className="main-nav">
      <ul>
        <li><Link to="/cats">Cats</Link></li>
        <li><Link to="/dogs">Dogs</Link></li>
        <li><Link to="/cars">Cars</Link></li>
        <li><Link to="/search">Search</Link></li>
      </ul>
    </nav>

export default NavMenu;
