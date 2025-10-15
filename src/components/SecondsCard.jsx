import React from 'react';

// Carte pour les secondes
const SecondsCard = ({ seconds }) => {
  return (
    <div className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 rounded-2xl shadow-lg p-6 border border-white/20 text-center animate-fade-in">
      <h3 className="text-lg font-bold text-gray-800 dark:text-white">Secondes</h3>
      <p className="text-3xl font-bold text-gray-700 dark:text-gray-200">{seconds} sec</p>
    </div>
  );
};

export default SecondsCard;