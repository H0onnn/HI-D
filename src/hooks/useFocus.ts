import { useState } from 'react';

const useFocus = () => {
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const onFocus = () => {
    setIsFocus(true);
  };

  const onBlur = () => {
    setIsFocus(false);
  };

  return { isFocus, setIsFocus, onFocus, onBlur };
};

export default useFocus;
