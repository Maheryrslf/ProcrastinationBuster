import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import ProgressBarCard from './ProgressBarCard';
import ActiveTasksCard from './ActiveTasksCard';
import CompletedTasksCard from './CompletedTasksCard'; // Pour la liste des tâches complétées
import TotalTasksCard from './TotalTasksCard';
import CompletedTasksStatCard from './CompletedTasksStatCard'; // Pour la stat des tâches accomplies
import TotalTimeCard from './TotalTimeCard';
import RewardNotification from './RewardNotification';
import TutorialPage from './TutorialPage'; // Nouveau composant pour la page de tutoriel
import AddTaskForm from './AddTaskForm';

// Composant principal
const DashboardContainer = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [newTime, setNewTime] = useState(0);
  const [rewardMessage, setRewardMessage] = useState(null);
  const [isTutorialOpen, setIsTutorialOpen] = useState(false); // État pour la page de tutoriel

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
  const totalTime = tasks.reduce((sum, task) => sum + (task.timeEstimated || 0), 0);


  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === '' || newTime <= 0) return;
    const newTasks = [...tasks, { id: Date.now(), text: newTask, completed: false, timeEstimated: parseInt(newTime) }];
    setTasks(newTasks);
    setNewTask('');
    setNewTime(0);
    checkRewards(newTasks);
  };

  const toggleTask = (id) => {
    const newTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
    checkRewards(newTasks);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
    checkRewards(newTasks);
  };

  const checkRewards = (updatedTasks) => {
    const updatedCompleted = updatedTasks.filter(t => t.completed).length;
    const updatedTotal = updatedTasks.length;
    const updatedProgress = updatedTotal > 0 ? (updatedCompleted / updatedTotal) * 100 : 0;
    const milestones = [25, 50, 75, 100];
    const message = milestones.find(m => progress < m && updatedProgress >= m);
    if (message) {
      setRewardMessage(`🎉 Bravo ! Vous avez atteint ${message}% de progression. +5 points d'efficacité !`);
      setTimeout(() => setRewardMessage(null), 3000);
    }
  };

  const closeTutorial = () => {
    setIsTutorialOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-300 via-yellow-500 to-orange-500 dark:bg-gradient-to-b dark:from-blue-700 dark:to-indigo-800 dark:to-gray-900 flex flex-col font-poppins relative">
      <Navbar /> 
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-4xl space-y-6">
          <ProgressBarCard progress={progress} completedTasks={completedTasks} totalTasks={totalTasks} className="col-span-full" />
          <AddTaskForm newTask={newTask} setNewTask={setNewTask} newTime={newTime} setNewTime={setNewTime} addTask={addTask} className="col-span-full" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ActiveTasksCard tasks={tasks.filter(task => !task.completed)} toggleTask={toggleTask} deleteTask={deleteTask} />
            <CompletedTasksCard tasks={tasks.filter(task => task.completed)} toggleTask={toggleTask} deleteTask={deleteTask} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <TotalTasksCard totalTasks={totalTasks} />
            <CompletedTasksStatCard completedTasks={completedTasks} />
            <TotalTimeCard totalTime={totalTime} />
          </div>
          <RewardNotification rewardMessage={rewardMessage} />
         
         
        </div>
      </div>
      {/* Bouton fixe pour voir le tutoriel */}
      <button
        onClick={() => setIsTutorialOpen(true)}
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition flex items-center space-x-2"
        aria-label="Voir le tutoriel"
      >
        <span>Voir le tutoriel</span>
      </button>
      {/* Page de tutoriel */}
      {isTutorialOpen && <TutorialPage onClose={closeTutorial} />}
    </div>
  );
};

export default DashboardContainer;