import { useState } from 'react';

const useActionState = () => {
  const [isReported, setIsReported] = useState<boolean>(false);
  const [isMoreActions, setIsMoreActions] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const toggleReport = () => setIsReported((prev) => !prev);
  const toggleMoreActions = () => setIsMoreActions((prev) => !prev);
  const toggleIsEditing = () => {
    setIsEditing((prev) => !prev);
    setIsMoreActions(false);
  };

  return {
    isReported,
    isMoreActions,
    isEditing,
    toggleReport,
    toggleMoreActions,
    toggleIsEditing,
  };
};

export default useActionState;
