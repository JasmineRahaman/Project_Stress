// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Tests from './components/Tests';
import Activities from './components/Activities';
import Communities from './components/Communities';

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tests" element={<Tests />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/communities" element={<Communities />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
