import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '@/components/public/Button';
import { ButtonContainer } from '@/styles/styles';
import AGREE_INFO from '@/public/images/ui/deleteAccount.svg';
import MainComment from '@/components/public/MainComment';
import Checkbox from '@/components/public/CheckBox';
import { ProfileSetupStepInterface } from '@/types/types';

const AgreeDelete = ({ onNext }: ProfileSetupStepInterface) => {
  const [checked, setChecked] = useState<boolean>(false);

  const checkHandler = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Layout>
      <MainComment style={{ fontSize: '20px' }} comment='과끼리를 탈퇴하면,' />
      <MainComment
        style={{
          fontSize: '16px',
          fontWeight: '400',
          marginTop: '-1.5rem',
        }}
        comment='탈퇴하기 전, 아래 내용을 확인해주세요.'
      />
      <ContentsContainer>
        <InfoWrapper>
          <AgreeInfo src={AGREE_INFO} alt='agree_info' />
        </InfoWrapper>
        <Checkbox
          text='위 내용을 확인했으며, 탈퇴에 동의합니다.'
          checked={checked}
          onChange={checkHandler}
          textStyle={CheckBoxTextStyles}
        />
      </ContentsContainer>
      <ButtonContainer>
        <Button $isFullWidth disabled={!checked} onClick={onNext}>
          계속하기
        </Button>
      </ButtonContainer>
    </Layout>
  );
};

export default AgreeDelete;

const Layout = styled.div``;

const ContentsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoWrapper = styled.div`
  width: 100%;
  height: 16rem;
  overflow: hidden;
`;

const AgreeInfo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CheckBoxTextStyles: React.CSSProperties = {
  fontWeight: 'bold',
  lineHeight: '21px',
};
