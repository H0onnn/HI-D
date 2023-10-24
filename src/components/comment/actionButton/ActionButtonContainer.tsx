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
    text: '채팅',
    onClickHandler: () => console.log('Edit button clicked'),
  },
  {
    text: '신고',
    onClickHandler: () => console.log('Delete button clicked'),
  },
];

const Layout = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
`;
