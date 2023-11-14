import React from 'react';
import MainComment from '@/components/public/MainComment';
import SetupMajor from '@/components/auth/signup/SetupMajor';
import Button from '@/components/public/Button';
import { ButtonContainer } from '@/styles/styles';

const SetupEditMajor = () => {
  return (
    <>
      <MainComment style={{ fontSize: '20px' }} comment='학과 수정' />
      <SetupMajor isEdit={true} />
      <ButtonContainer>
        <Button type='submit' $isFullWidth>
          저장하기
        </Button>
      </ButtonContainer>
    </>
  );
};

export default SetupEditMajor;
