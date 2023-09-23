import React, { useRef } from 'react';
import styled from 'styled-components';
import ChatContents from './ChatContents';

type Props = {
  setModal: (modal: boolean) => void;
};
const ChatModal = ({ setModal }: Props) => {
  const modalBackground = useRef(null);

  return (
    <ChatModalLayout
      ref={modalBackground}
      onClick={(e) => {
        if (e.target === modalBackground.current) {
          setModal(false);
        }
      }}
    >
      <ChatRoomContainer>
        <ChatProfileBox>
          <img src='/src/public/images/elephant.png' alt='profile' />
        </ChatProfileBox>
        <ChatContents />
        {/* chat input */}
        <input />
      </ChatRoomContainer>
    </ChatModalLayout>
  );
};

export default ChatModal;

const ChatModalLayout = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  display: flex;

  background: rgba(0, 0, 0, 0.5);
`;
const ChatRoomContainer = styled.div`
  width: 100%;
  height: calc(100% - 80px);
  padding: 60px 30px 30px 30px;

  position: absolute;
  top: 80px;
  display: flex;
  flex-direction: column;

  background: #fff;
  border-radius: 20px 20px 0px 0px;
`;
const ChatProfileBox = styled.div`
  position: absolute;
  left: 30px;
  bottom: calc(100% - 40px);

  background: #f3f2f2;
  border-radius: 68px;
  box-shadow: 0px 4px 16px 0px rgba(100, 100, 100, 0.1);

  > img {
    width: 68px;
    height: 68px;
  }
`;
