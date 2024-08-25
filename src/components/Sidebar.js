// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-200 p-4 h-screen">
      <ul className="space-y-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/tests">Tests</Link></li>
        <li><Link to="/activities">Activities</Link></li>
        <li><Link to="/communities">Communities</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
