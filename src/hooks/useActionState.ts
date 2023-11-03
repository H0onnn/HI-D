import { useState } from 'react';

const useActionState = () => {
  const [isReported, setIsReported] = useState<boolean>(false);
  const [isMoreActions, setIsMoreActions] = useState<boolean>(false);

  const toggleReport = () => setIsReported((prev) => !prev);
  const toggleMoreActions = () => setIsMoreActions((prev) => !prev);

  return {
    isReported,
    isMoreActions,
    toggleReport,
    toggleMoreActions,
  };
};

export default useActionState;
