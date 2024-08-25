// src/components/Activities.js
import React from 'react';

export const Activities = () => {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-bold mb-4">Activities</h1>
      <div className="space-y-4">
        <div className="bg-gray-100 p-4 rounded">
          <h2 className="text-xl font-semibold mb-2">Tic Tac Toe</h2>
          <p>Play a simple game of Tic Tac Toe to relax and have fun!</p>
          {/* Add Tic Tac Toe game component here */}
        </div>
        {/* Add more games or activities here */}
      </div>
    </main>
  );
};

export default Activities;
