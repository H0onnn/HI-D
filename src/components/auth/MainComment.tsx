import React from 'react';
import styled from 'styled-components';

const MainComment = () => {
  return (
    <MainTextContainer>
      <MainText>
        전공 고민이 많은 당신께,
        <br />
        대학생 매칭 서비스
      </MainText>
    </MainTextContainer>
  );
};

export default MainComment;

const MainTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainText = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 2rem;
`;
