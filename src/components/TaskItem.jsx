import React, { useState, useEffect, useCallback } from 'react';
import { CheckCircle, Trash2, Edit } from 'lucide-react';

// Élément de tâche avec compteur ascendant
const TaskItem = ({ task, toggleTask, deleteTask }) => {
  const [elapsedSeconds, setElapsedSeconds] = useState(0); // Temps écoulé commence à 0
  const targetSeconds = task.timeEstimated * 60; // Temps cible en secondes

  // Utiliser useCallback pour éviter les appels répétés pendant le rendu
  const handleTaskCompletion = useCallback(() => {
    if (!task.completed) {
      toggleTask(task.id);
    }
  }, [task.completed, toggleTask, task.id]);

  useEffect(() => {
    let interval;
    if (!task.completed) {
      interval = setInterval(() => {
        setElapsedSeconds(prev => {
          const newElapsed = prev + 1;
          if (newElapsed >= targetSeconds) {
            clearInterval(interval); // Arrêter quand le temps cible est atteint
            handleTaskCompletion(); // Marquer comme terminée après le rendu
            return targetSeconds; // Ne pas dépasser
          }
          return newElapsed;
        });
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval); // Nettoyer l'intervalle
    };
  }, []); // Dépendances vides : s'exécute une seule fois au montage

  // Calcul des heures, minutes, secondes écoulées
  const hours = Math.floor(elapsedSeconds / 3600);
  const minutes = Math.floor((elapsedSeconds % 3600) / 60);
  const seconds = elapsedSeconds % 60;

  return (
    <li
      className={`flex items-center justify-between p-3 rounded-2xl backdrop-blur-md bg-white/30 dark:bg-gray-800/30 border border-white/20 shadow-md animate-fade-in ${
        task.completed ? 'line-through text-gray-500' : ''
      }`}
    >
      <div className="flex items-center space-x-2 flex-1">
        <button onClick={() => toggleTask(task.id)}>
          <CheckCircle size={20} className={task.completed ? 'text-green-500' : 'text-gray-400'} />
        </button>
        <span>{task.text}</span>
        <span className="text-sm text-gray-600 dark:text-gray-300">
          {task.completed ? 'Terminée' : `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}
        </span>
      </div>
      <div className="flex space-x-2">
        <button className="text-blue-500 hover:text-blue-700"><Edit size={20} /></button>
        <button onClick={() => deleteTask(task.id)} className="text-red-500 hover:text-red-700">
          <Trash2 size={20} />
        </button>
      </div>
    </li>
  );
};

export default TaskItem;