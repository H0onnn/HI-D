import React, { useRef } from 'react';
import styled from 'styled-components';

type Props = {
  setModal: (modal: boolean) => void;
};
export default function ChatModal({ setModal }: Props) {
  const modalBackground = useRef(null);

  return (
    <ModalContainer
      ref={modalBackground}
      onClick={(e) => {
        if (e.target === modalBackground.current) {
          setModal(false);
        }
      }}
    >
      <ModalContent>
        <ChatProfileBox>
          <img src='/src/public/images/elephant.png' alt='profile' />
        </ChatProfileBox>
        {/* chat contents */}
        {/* chat input */}
      </ModalContent>
    </ModalContainer>
  );
}

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  display: flex;
  background: rgba(0, 0, 0, 0.5);
`;
const ModalContent = styled.div`
  position: absolute;
  background-color: #ffffff;
  width: 100%;
  height: calc(100% - 80px);
  padding: 15px;
  top: 80px;

  display: flex;
  flex-direction: column;
  padding: 60px 30px 30px 30px;

  border-radius: 20px 20px 0px 0px;
  background: #fff;
`;
const ChatProfileBox = styled.div`
  border-radius: 68px;
  background: #f3f2f2;

  box-shadow: 0px 4px 16px 0px rgba(100, 100, 100, 0.1);
  position: absolute;
  left: 30px;
  bottom: calc(100% - 40px);

  > img {
    width: 68px;
    height: 68px;
  }
`;

// const OtherChat = styled.div``;
// const MyChat = styled.div``;
// const YourChat = styled.div``;
// const ChatTime = styled.div``;
// const YourName = styled.div``;
