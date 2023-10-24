import React from 'react';
import styled from 'styled-components';
import CommentActionButtons from './CommentActionButtons';

const ActionButtonContainer = () => {
  return (
    <Layout>
      {BUTTON_ACTIONS.map((action, index) => (
        <CommentActionButtons
          key={index}
          text={action.text}
          onClickHandler={action.onClickHandler}
        />
      ))}
    </Layout>
  );
};

export default ActionButtonContainer;

const BUTTON_ACTIONS = [
  {
    text: '수정',
    onClickHandler: () => console.log('Edit button clicked'),
  },
  {
    text: '삭제',
    onClickHandler: () => console.log('Delete button clicked'),
  },
];

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
`;
