import React from 'react';

// Composant pour la notification de récompense
const RewardNotification = ({ rewardMessage }) => {
  if (!rewardMessage) return null;
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-yellow-200 p-4 rounded-md shadow-lg animate-bounce">
      {rewardMessage}
    </div>
  );
};

export default RewardNotification;