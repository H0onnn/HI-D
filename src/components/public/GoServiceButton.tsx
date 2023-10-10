import React from 'react';
import { useNavigate } from 'react-router-dom';
import { colors } from '@/constants/colors';
import { LINK } from '@/constants/links';
import Button from './Button';

const GoServiceButton = () => {
  const navigate = useNavigate();

  const serviceClickHandler = () => {
    navigate(LINK.MAIN);
  };

  return (
    <Button
      $isFullWidth
      variant='textOnly'
      style={{
        color: colors.gray4,
      }}
      onClick={serviceClickHandler}
    >
      서비스 둘러보기
    </Button>
  );
};

export default GoServiceButton;
