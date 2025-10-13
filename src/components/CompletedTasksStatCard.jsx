import React from 'react';

const CompletedTasksStatCard = ({ completedTasks }) => {
  return (
    <div className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 rounded-2xl shadow-lg p-6 border border-white/20 text-center">
      <h2 className="text-xl font-bold text-black dark:text-white mb-2">Accomplies</h2>
      <p className="text-2xl font-bold text-black dark:text-white">{completedTasks}</p>
    </div>
  );
};

export default CompletedTasksStatCard;