import React from 'react';
import styled from 'styled-components';

interface MainCommentInterface extends React.HTMLAttributes<HTMLElement> {
  comment: string;
}

const MainComment = ({ comment, ...props }: MainCommentInterface) => {
  return (
    <MainTextContainer>
      <MainText {...props}>{comment}</MainText>
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
  white-space: pre-line;
`;
