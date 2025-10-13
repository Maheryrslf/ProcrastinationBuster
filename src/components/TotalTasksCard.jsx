import React from 'react';

// Carte pour le total des tâches
const TotalTasksCard = ({ totalTasks }) => {
  return (
    <div className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 rounded-2xl shadow-lg p-6 border border-white/20 text-center">
      <h2 className="text-xl font-bold text-black dark:text-white mb-2">Tâches Totales</h2>
      <p className="text-2xl font-bold text-black dark:text-white">{totalTasks}</p>
    </div>
  );
};

export default TotalTasksCard;