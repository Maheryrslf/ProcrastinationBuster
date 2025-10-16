import React from 'react';
import { Plus } from 'lucide-react';


const AddTaskForm = ({ newTask, setNewTask, newTime, setNewTime, addTask }) => {
  return (
    <div className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 rounded-2xl shadow-lg p-6 border border-white/20 animate-fade-in">
      <form onSubmit={addTask} className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Ajoutez une nouvelle tâche..."
          className="flex-1 text-black dark:text-white p-2 border border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
        />
        <input
          type="number"
          value={newTime}
          onChange={(e) => setNewTime(e.target.value)}
          placeholder="Temps (min)"
          className="w-24 text-black dark:text-white  p-2 border border-none rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
          min="1"
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          <Plus size={20} />
        </button>
      </form>
    </div>
  );
};

export default AddTaskForm;
