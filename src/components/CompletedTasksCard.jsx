import React from 'react';
import TaskItem from './TaskItem';

// Carte pour les tâches complétées
const CompletedTasksCard = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <div className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 rounded-2xl shadow-lg p-6 border border-white/20">
      <h2 className="text-xl font-bold text-black dark:text-white mb-4">Tâches Complétées</h2>
      <ul className="space-y-4">
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} />
        ))}
      </ul>
    </div>
  );
};

export default CompletedTasksCard;