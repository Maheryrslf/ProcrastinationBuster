import React from 'react';

// Page de tutoriel stylisée comme un dashboard
const TutorialPage = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gradient-to-b from-yellow-300 via-yellow-500 to-orange-500 dark:bg-gradient-to-b dark:from-blue-800 dark:to-indigo-900 min-h-[80vh] w-full max-w-4xl rounded-2xl shadow-lg p-6 border border-white/20 backdrop-blur-md font-poppins">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Tutoriel ZenQuest</h1>
          <button
            onClick={onClose}
            className="text-gray-600 dark:text-gray-200 hover:text-gray-800 dark:hover:text-white text-2xl"
            aria-label="Fermer le tutoriel"
          >
            &times;
          </button>
        </div>
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">Bienvenue !</h2>
            <p className="text-gray-600 dark:text-gray-300">
              ZenQuest est votre outil pour gérer vos tâches efficacement. Voici comment l'utiliser :
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">1. Ajouter une Tâche</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Utilisez le formulaire en haut pour ajouter une nouvelle tâche et indiquer le temps estimé (en minutes).
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">2. Gérer les Tâches</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Cochez une tâche pour la marquer comme terminée, ou supprimez-la avec l'icône corbeille.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-gray-800 dark:text-white">3. Suivre la Progression</h2>
            <p className="text-gray-600 dark:text-gray-300">
              La barre de progression et les statistiques vous montrent votre avancement. Gagnez des points en atteignant des jalons (25%, 50%, etc.) !
            </p>
          </section>
          <div className="text-center">
            <button
              onClick={onClose}
              className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition"
            >
              Compris !
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialPage;