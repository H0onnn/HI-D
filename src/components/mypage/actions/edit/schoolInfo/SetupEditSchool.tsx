import React from 'react';
import MainComment from '@/components/public/MainComment';
import SetupSchool from '@/components/auth/signup/SetupSchool';
import SetupEmail from '@/components/auth/signup/SetupEmail';
import Button from '@/components/public/Button';
import { ButtonContainer } from '@/styles/styles';

const SetupEditSchool = () => {
  return (
    <>
      <MainComment style={{ fontSize: '20px' }} comment='학교 수정' />
      <SetupSchool isEdit={true} />

      <MainComment style={{ fontSize: '20px' }} comment='이메일 인증' />
      <SetupEmail isEdit={true} />

      <ButtonContainer>
        <Button type='submit' $isFullWidth>
          저장하기
        </Button>
      </ButtonContainer>
    </>
  );
};

export default SetupEditSchool;
