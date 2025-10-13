import React from 'react';

// Carte pour le temps total
const TotalTimeCard = ({ totalTime }) => {
  return (
    <div className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 rounded-2xl shadow-lg p-6 border border-white/20 text-center">
      <h2 className="text-xl font-bold text-black dark:text-white mb-2">Temps Total</h2>
      <p className="text-2xl font-bold text-black dark:text-white">{totalTime} min</p>
    </div>
  );
};

export default TotalTimeCard;