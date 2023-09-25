import React from 'react';
import styled from 'styled-components';

type Props = {
  chat: string; // TODO: chat type 정의
  onClick: () => void;
};

const ChatItem = ({ chat, onClick }: Props) => {
  console.log('chat', chat);
  return (
    <ChatItemLayout onClick={onClick}>
      <ProfileBox>
        <img src='/src/public/images/elephant.png' alt='profile' />
      </ProfileBox>
      <div>
        <div>다른사람 닉네임</div>
        <div>최근 채팅 1개 overflow hidden</div>
        <div>11:12</div>
      </div>
      <div>
        <div>...</div>
        <div>num</div>
      </div>
    </ChatItemLayout>
  );
};
export default ChatItem;

const ChatItemLayout = styled.div`
  display: grid;
  grid-template-columns: 2fr 8fr 1fr;

  width: 100%;
  padding: 20px 18px;
  gap: 4px;

  border-radius: 8px;
  background: #fff;
`;
const ProfileBox = styled.div`
  > img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
`;
