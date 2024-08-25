// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Understanding Stress</h1>
      <p className="mb-4">Stress is a natural response to challenging situations. It affects us both physically and emotionally, impacting our overall well-being.</p>
      <p className="mb-6">High levels of stress can lead to health problems, reduced productivity, and impaired relationships. It's important to manage stress effectively to maintain a balanced life.</p>
      <Link to="/tests">
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Get Started</button>
      </Link>
    </main>
  );
};

export default Home;
