import { useState } from 'react';

const usePostActionState = () => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [isBookMarked, setIsBookMarked] = useState<boolean>(false);
  const [isReported, setIsReported] = useState<boolean>(false);
  const [isMoreActions, setIsMoreActions] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const toggleLike = () => setIsLiked((prev) => !prev);
  const toggleBookmark = () => setIsBookMarked((prev) => !prev);
  const toggleReport = () => setIsReported((prev) => !prev);
  const toggleMoreActions = () => setIsMoreActions((prev) => !prev);
  const toggleEditPost = () => setIsEditing((prev) => !prev);

  return {
    isLiked,
    isBookMarked,
    isReported,
    isMoreActions,
    isEditing,
    toggleLike,
    toggleBookmark,
    toggleReport,
    toggleMoreActions,
    toggleEditPost,
  };
};

export default usePostActionState;
