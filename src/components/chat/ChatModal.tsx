import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Input from '../public/Input';
import { MessageInterface, PageStatusInterface } from '../../types/chat';
import { colors } from '../../constants/colors';
import { getMessageList } from '@/services/chat';
import useObserver from '@/hooks/useObserver';
import Messages from './Messages';
import DefaultProfile from '@/public/images/default_profile.svg';
import { imageStyle, slideUp } from '@/styles/styles';
import { IModalProps } from '@/types/modal';

const ChatModal = ({ url: roomId }: IModalProps) => {
  const [messageList, setMessageList] = useState<MessageInterface[]>([]);
  const [{ page, hasNext }, setPage] = useState<PageStatusInterface>({ page: 1, hasNext: true });
  const infinityRef = useObserver(() => nextPageHandler());
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  const nextPageHandler = () => {
    if (!hasNext || loading || page === 0 || !roomId) return;
    setPage((prev) => ({ ...prev, page: prev.page + 1 }));
  };

  useEffect(() => {
    if (!hasNext || loading || page === 0 || !roomId) return;
    setLoading(true);
    getMessageList({ roomId: Number(roomId), page })
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
    <ChatModalLayout>
      {/* TODO: reverse infinity scroll */}
      {!loading && hasNext && <div ref={infinityRef} style={{ height: '1px' }}></div>}
      <ImageWrapper>
        <img src={DefaultProfile} alt='profile_img' />
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
  );
};

export default ChatModal;

const ChatModalLayout = styled.div`
  position: absolute;
  width: 100%;
  padding: 6rem 3rem 2rem 3rem;
  display: flex;
  flex-direction: column;
  animation: ${slideUp} 0.5s ease-in-out;
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
  background-color: ${colors.pastel};
  border-radius: 50%;
  box-shadow: 0 0.4rem 1.6rem 0 rgba(100, 100, 100, 0.1);
  width: 6.8rem;
  height: 6.8rem;
  ${imageStyle}
`;
const InputWrapper = styled.div`
  width: 100%;
  position: relative;
`;
