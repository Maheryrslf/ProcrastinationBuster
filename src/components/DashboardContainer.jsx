import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import ProgressBarCard from './ProgressBarCard';
import AddTaskForm from './AddTaskForm';
import ActiveTasksCard from './ActiveTasksCard';
import CompletedTasksCard from './CompletedTasksCard';
import TotalTimeTitleCard from './TotalTimeTitleCard';
import HoursCard from './HoursCard';
import MinutesCard from './MinutesCard';
import SecondsCard from './SecondsCard';
import TotalTasksCard from './TotalTasksCard';
import CompletedTasksStatCard from './CompletedTasksStatCard';
import RewardNotification from './RewardNotification';
import TutorialPage from './TutorialPage';

// Composant principal
const DashboardContainer = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [newTime, setNewTime] = useState(0);
  const [rewardMessage, setRewardMessage] = useState(null);
  const [remainingSeconds, setRemainingSeconds] = useState(0);
  const [isTutorialOpen, setIsTutorialOpen] = useState(false);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;
  const progress = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
  const totalTimeMinutes = tasks.reduce((sum, task) => sum + (task.timeEstimated || 0), 0);

  useEffect(() => {
    // Compteur à rebours
    const interval = setInterval(() => {
      setRemainingSeconds(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim() === '' || newTime <= 0) return;
    const newTasks = [...tasks, { id: Date.now(), text: newTask, completed: false, timeEstimated: parseInt(newTime) }];
    setTasks(newTasks);
    setNewTask('');
    setNewTime(0);
    setRemainingSeconds(prev => prev + parseInt(newTime) * 60);
    checkRewards(newTasks);
  };

  const toggleTask = (id) => {
    const newTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(newTasks);
    // Réduire le temps restant si la tâche est marquée comme terminée
    const task = newTasks.find(t => t.id === id);
    if (task && task.completed) {
      const timeToSubtract = task.timeEstimated * 60; // Convertir en secondes
      setRemainingSeconds(prev => Math.max(prev - timeToSubtract, 0)); // Ne pas passer en dessous de 0
    }
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

  // Calcul des heures, minutes, secondes restantes
  const hours = Math.floor(remainingSeconds / 3600);
  const minutes = Math.floor((remainingSeconds % 3600) / 60);
  const seconds = remainingSeconds % 60;

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-300 via-yellow-500 to-orange-500 dark:bg-gradient-to-b dark:from-blue-800 dark:to-indigo-900 flex flex-col font-poppins relative">
      <Navbar />
      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-4xl space-y-6">
          <ProgressBarCard progress={progress} completedTasks={completedTasks} totalTasks={totalTasks} className="col-span-full" />
          <AddTaskForm newTask={newTask} setNewTask={setNewTask} newTime={newTime} setNewTime={setNewTime} addTask={addTask} className="col-span-full" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ActiveTasksCard tasks={tasks.filter(task => !task.completed)} toggleTask={toggleTask} deleteTask={deleteTask} />
            <CompletedTasksCard tasks={tasks.filter(task => task.completed)} toggleTask={toggleTask} deleteTask={deleteTask} />
          </div>
          <TotalTimeTitleCard />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <HoursCard hours={hours} />
            <MinutesCard minutes={minutes} />
            <SecondsCard seconds={seconds} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TotalTasksCard totalTasks={totalTasks} />
            <CompletedTasksStatCard completedTasks={completedTasks} />
          </div>
          <RewardNotification rewardMessage={rewardMessage} />
        </div>
      </div>
      <button
        onClick={() => setIsTutorialOpen(true)}
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition flex items-center space-x-2"
        aria-label="Voir le tutoriel"
      >
        <span>Voir le tutoriel</span>
      </button>
      {isTutorialOpen && <TutorialPage onClose={closeTutorial} />}
    </div>
  );
};

export default DashboardContainer;