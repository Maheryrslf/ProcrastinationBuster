import React from 'react';
import TaskItem from './TaskItem';

const ActiveTasksCard = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <div className="rounded-2xl shadow-lg p-6 bg-gradient-to-br from-indigo-400/30 to-purple-400/20  border border-white/10 backdrop-blur-lg transition-all hover:scale-[1.01]">
      <h2 className="text-2xl font-semibold mb-4 text-white drop-shadow-sm">Tâches Actives</h2>
      <ul className="space-y-3">
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default ActiveTasksCard;
