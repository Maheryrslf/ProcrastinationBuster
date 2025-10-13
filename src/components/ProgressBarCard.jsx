import React from 'react';

// Carte de progression avec barre et cercle
const ProgressBarCard = ({ progress, completedTasks, totalTasks }) => {
  return (
    <div className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 rounded-2xl shadow-lg p-6 border border-white/20 animate-fade-in col-span-full">
      <div className="relative w-20 h-20 mx-auto mb-4">
        <svg className="w-full h-full" viewBox="0 0 36 36">
          <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#e5e7eb" strokeWidth="3" />
          <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#3b82f6" strokeWidth="3" strokeDasharray={`${progress}, 100`} />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-black dark:text-white">{Math.round(progress)}%</div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-900">
        <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
      </div>
      <p className="text-center text-sm text-gray-900 dark:text-white mt-2">
        {completedTasks} / {totalTasks} tâches accomplies
      </p>
    </div>
  );
};

export default ProgressBarCard;