import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import ChatContents from './ChatContents';
// import { InputWrapper } from '../../styles/styles';
import Input from '../public/Input';
import { ChatInterface, ChatModalStatusInterface } from '../../types/chat';
import useBodyScrollLock from '../../hooks/useBodyScrollLock';
import { URL } from '../../constants/url';
import { colors } from '../../constants/colors';

type Props = {
  setChatModal: React.Dispatch<React.SetStateAction<ChatModalStatusInterface>>;
  status: ChatModalStatusInterface;
};
const ChatModal = ({ setChatModal, status: { roomId } }: Props) => {
  const modalBackground = useRef(null);
  const [chatContentList, setChatContentList] = useState<ChatInterface[]>([]);
  const { openScroll } = useBodyScrollLock();

  const yourProfileImg = '/src/public/images/elephant.png';

  const closeChatModalHanlder = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === modalBackground.current) {
      setChatModal({ isOpen: false, roomId: 0 });
      openScroll();
    }
  };

  const getChatByRoomId = async (roomId: number) => {
    // TODO: roomId로 채팅방 정보 가져오기
    // /chat-room/:roomId
    console.log(roomId);
    const data: ChatInterface[] = await [
      {
        nickname: 'nickname',
        content:
          'contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontent',
        createdAt: 'createdAt',
      },
      { nickname: 'myNickname', content: 'content', createdAt: 'createdAt' },
      { nickname: 'nickname', content: 'content', createdAt: 'createdAt' },
      { nickname: 'nickname', content: 'content', createdAt: 'createdAt' },
      {
        nickname: 'myNickname',
        content:
          'contentcontentcontentcontentcontentcontentcontentcontentcontentcontentcontentconte',
        createdAt: 'createdAt',
      },
      { nickname: 'nickname', content: 'content', createdAt: 'createdAt' },
      { nickname: 'nickname', content: 'content', createdAt: 'createdAt' },
    ];
    setChatContentList(data);
  };

  useEffect(() => {
    getChatByRoomId(roomId);
  }, [roomId]);
  return (
    <>
      <BackDrop ref={modalBackground} onClick={closeChatModalHanlder} />
      <ModalWrapper>
        <ChatModalLayout>
          <ImageWrapper>
            <img src={yourProfileImg || URL.DEFAULT_PROFILE_IMG} alt='profile_img' />
          </ImageWrapper>
          <ChatContents chatContentList={chatContentList} />
          <InputWrapper>
            <Input type='text' placeholder='채팅을 입력해주세요.' />
          </InputWrapper>
        </ChatModalLayout>
      </ModalWrapper>
    </>
  );
};

export default ChatModal;

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 99;
  overflow: hidden;
`;
const ModalWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 39rem;
  z-index: 99;
`;
const slideUp = keyframes`
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
`;
const ChatModalLayout = styled.div`
  z-index: 100;
  position: absolute;
  width: 100%;
  /* position: fixed; */
  /* top: 7.3rem; */
  padding: 6rem 3rem;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */

  animation: ${slideUp} 0.5s ease-in-out;
  /* justify-content: center;
  align-items: center; */
  /* gap: 2rem; */
  /* left: 0; */
  /* bottom: 0; */
  /* top: 7.3rem; */
  bottom: 0;
  height: calc(100vh - 7.3rem);
  background-color: ${colors.white};
  border-radius: 2rem 2rem 0 0;
  border-top: 1px solid ${colors.gray1};
`;

const ImageWrapper = styled.div`
  position: absolute;
  overflow: hidden;
  left: 3.6rem;
  bottom: calc(100% - 4.3rem);
  background: #f3f2f2;
  border-radius: 50%;
  box-shadow: 0 0.4rem 1.6rem 0 rgba(100, 100, 100, 0.1);
  width: 6.8rem;
  height: 6.8rem;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  bottom: 7rem;
  left: 0;
  padding: 0 2rem;
`;
const InputWrapper = styled.div`
  width: 100%;
  position: relative;
  /* position: absolute; */
  /* bottom: 5rem; */
`;
