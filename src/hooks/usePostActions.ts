import { useState } from 'react';

const usePostActions = () => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isCommented, setIsCommented] = useState<boolean>(false);
  const [isBookMarked, setIsBookMarked] = useState<boolean>(false);
  const [isReported, setIsReported] = useState<boolean>(false);

  const toggleLikeHandler = () => {
    setIsLiked((prev) => !prev);
  };

  const toggleCommentHandler = () => {
    setIsCommented((prev) => !prev);
  };

  const toggleBookmarkHandler = () => {
    setIsBookMarked((prev) => !prev);
  };

  const toggleReportHandler = () => {
    setIsReported((prev) => !prev);
  };

  return {
    isLiked,
    isCommented,
    isBookMarked,
    isReported,
    toggleLikeHandler,
    toggleCommentHandler,
    toggleBookmarkHandler,
    toggleReportHandler,
  };
};

export default usePostActions;
