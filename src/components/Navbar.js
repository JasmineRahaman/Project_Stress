// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <ul className="flex space-x-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/tests">Tests</Link></li>
        <li><Link to="/activities">Activities</Link></li>
        <li><Link to="/communities">Communities</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
