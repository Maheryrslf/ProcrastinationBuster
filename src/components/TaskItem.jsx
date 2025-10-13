import React from 'react';
import { CheckCircle, Trash2, Edit } from 'lucide-react';

// Élément de tâche avec temps et animations
const TaskItem = ({ task, toggleTask, deleteTask }) => {
  return (
    <li
      className={`flex items-center justify-between p-3 rounded-2xl backdrop-blur-md bg-white/30 dark:bg-gray-800/30 border border-white/20 shadow-md animate-fade-in ${
        task.completed ? 'line-through text-gray-500' : ''
      }`}
    >
      <div className="flex items-center space-x-2 flex-1">
        <button onClick={() => toggleTask(task.id)}>
          <CheckCircle size={30} className={task.completed ? 'text-green-500' : 'text-gray-400'} />
        </button>
        <span className="flex-1">{task.text}</span>
        <span className="text-sm text-gray-600 dark:text-gray-300">{task.timeEstimated} min</span>
      </div>
      <div className="flex space-x-2">
        <button className="text-blue-500 hover:text-blue-700"><Edit size={20} /></button> {/* Édition future */}
        <button onClick={() => deleteTask(task.id)} className="text-red-500 hover:text-red-700">
          <Trash2 size={20} />
        </button>
      </div>
    </li>
  );
};

export default TaskItem;