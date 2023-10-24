import { useState } from 'react';

const usePostActions = () => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isBookMarked, setIsBookMarked] = useState<boolean>(false);
  const [isReported, setIsReported] = useState<boolean>(false);

  const toggleLikeHandler = () => {
    setIsLiked((prev) => !prev);
  };

  const toggleBookmarkHandler = () => {
    setIsBookMarked((prev) => !prev);
  };

  const toggleReportHandler = () => {
    setIsReported((prev) => !prev);
  };

  return {
    isLiked,
    isBookMarked,
    isReported,
    toggleLikeHandler,
    toggleBookmarkHandler,
    toggleReportHandler,
  };
};

export default usePostActions;
