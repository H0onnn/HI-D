import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Input from '../public/Input';
import { ChatModalStatusInterface, MessageInterface, PageStatusInterface } from '../../types/chat';
import useBodyScrollLock from '../../hooks/useBodyScrollLock';
import { URL } from '../../constants/url';
import { colors } from '../../constants/colors';
import { getMessageList } from '@/api/services/chat';
import useObserver from '@/hooks/useObserver';
import Messages from './Messages';

type Props = {
  setChatModal: React.Dispatch<React.SetStateAction<ChatModalStatusInterface>>;
  status: ChatModalStatusInterface;
};
const ChatModal = ({ setChatModal, status: { roomId } }: Props) => {
  const [messageList, setMessageList] = useState<MessageInterface[]>([]);
  const [{ page, hasNext }, setPage] = useState<PageStatusInterface>({ page: 1, hasNext: true });
  const modalBackground = useRef(null);
  const { openScroll } = useBodyScrollLock();
  const infinityRef = useObserver(() => nextPageHandler());
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const nextPageHandler = () => {
    if (!hasNext || loading || page === 0 || !roomId) return;
    setPage((prev) => ({ ...prev, page: prev.page + 1 }));
  };

  const closeChatModalHanlder = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === modalBackground.current) {
      setChatModal({ isOpen: false, roomId: 0 });
      openScroll();
    }
  };

  useEffect(() => {
    if (!hasNext || loading || page === 0 || !roomId) return;
    setLoading(true);
    getMessageList({ roomId, page })
      .then((data) => {
        setPage((prev) => ({ ...prev, hasNext: data.hasNext }));
        setMessageList((prev) => [...prev, ...data.dataList]);
      })
      .catch(() => {
        setPage({ page: 0, hasNext: false });
      });
    setLoading(false);
  }, [roomId, page, hasNext]);

  return (
    <>
      <BackDrop ref={modalBackground} onClick={closeChatModalHanlder} />
      <ModalWrapper>
        <ChatModalLayout>
          {/* TODO: reverse infinity scroll */}
          {!loading && hasNext && <div ref={infinityRef} style={{ height: '1px' }}></div>}
          <ImageWrapper>
            <img src={'상대방 이미지' || URL.DEFAULT_PROFILE_IMG} alt='profile_img' />
          </ImageWrapper>
          <Messages messageList={messageList} />
          <InputWrapper>
            <Input
              type='text'
              placeholder='채팅을 입력해주세요.'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
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
