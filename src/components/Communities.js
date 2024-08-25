// src/components/Communities.js
import React from 'react';

export const Communities = () => {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Communities</h1>
      <ul className="space-y-4">
        <li><a href="https://www.example-meditation-center.com" className="text-blue-500">Meditation Centers</a></li>
        <li><a href="https://www.example-ngo.org/tree-plantation" className="text-blue-500">NGOs for Tree Plantation</a></li>
        <li><a href="https://www.example-open-kitchen.org" className="text-blue-500">Open Baking Kitchens</a></li>
        {/* Add more links or community resources here */}
      </ul>
    </main>
  );
};

export default Communities;
