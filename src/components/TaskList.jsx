import React from 'react';
import TaskItem from './TaskItem';

// Liste des tâches
const TaskList = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <div className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 rounded-2xl shadow-lg p-6 border border-white/20">
      <ul className="space-y-4">
        {tasks.map(task => (
          <TaskItem key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;