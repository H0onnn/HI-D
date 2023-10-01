import React from 'react';
import styled from 'styled-components';
import { ChatRoomInterface } from '../../types/chat';

type Props = {
  chatRoom: ChatRoomInterface;
  chatRoomClick: () => void;
};

const ChatRoomItem = ({ chatRoom: { roomId, members }, chatRoomClick }: Props) => {
  console.log(roomId, members);
  return (
    <ComponentLayout onClick={chatRoomClick}>
      <ImageWrapper>
        <img src='/src/public/images/elephant.png' alt='your_profile' width={40} height={40} />
      </ImageWrapper>
      <ContentBox>
        <div>다른사람 닉네임</div>
        <div>최근 채팅 1개 overflow hidden</div>
        <div>11:12</div>
      </ContentBox>
      <IconBox>
        <div>...</div>
        <div>num</div>
      </IconBox>
    </ComponentLayout>
  );
};
export default ChatRoomItem;

const ComponentLayout = styled.div`
  display: grid;
  grid-template-columns: 2fr 8fr 1fr;
  width: 100%;
  padding: 2rem 1.8rem;
  gap: 4rem;
  border-radius: 0.8rem;
  background: #fff;
`;
const ImageWrapper = styled.div`
  border-radius: 50%;
`;
const ContentBox = styled.div``;
const IconBox = styled.div``;
