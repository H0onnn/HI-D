import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Input from '../public/Input';
import { colors } from '../../constants/colors';
import Messages from './Messages';
import DefaultProfile from '@/public/images/default_profile.svg';
import { imageStyle, scrollNone, slideUp } from '@/styles/styles';
import { IModalProps } from '@/types/modal';
import useMessages, { QUERY_KEY_MESSAGE } from '@/hooks/useMessages';
import { webSocketInstance } from '@/services/websocketInstance';
import { useChatMessageStore } from '@/store/chatMessageStore';
import useObserver from '@/hooks/useObserver';
import { useQueryClient } from '@tanstack/react-query';
import useUser from '@/hooks/useUser';
import { QUERY_KEY_CHAT_ROOM } from '@/hooks/useChatRooms';

const ChatModal = ({ url: roomId, image }: IModalProps) => {
  const { data, moreDataHandler, isFetching, refetch } = useMessages(Number(roomId));
  const loadMoreRef = useObserver(() => moreDataHandler());
  const [message, setMessage] = useState('');
  const { messages, initMessages, enterMember } = useChatMessageStore();
  const messagesContainerRef = React.useRef<HTMLDivElement>(null);
  const [scrollHeight, setScrollHeight] = useState(0);
  const queryClient = useQueryClient();
  const { user } = useUser();

  const sendMessage = () => {
    if (message.trim() === '') return;
    webSocketInstance.sendMessage(Number(roomId), message);
    setMessage('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) return;
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage();
    }
  };

  useEffect(() => {
    webSocketInstance.enterChatRoom(Number(roomId));
    return () => {
      initMessages();
      webSocketInstance.exitChatRoom();
    };
  }, [roomId]);

  useEffect(() => {
    return () => {
      queryClient.removeQueries({ queryKey: [QUERY_KEY_MESSAGE, roomId] });
    };
  }, [roomId]);

  // 이전 메시지 불러올때, 스크롤 높이 유지
  useEffect(() => {
    if (!messagesContainerRef) return;

    if (messagesContainerRef.current) {
      const scrollTop = messagesContainerRef.current.scrollHeight - scrollHeight;
      messagesContainerRef.current.scrollTop = scrollTop;
      setScrollHeight(messagesContainerRef.current.scrollHeight);
    }
  }, [data?.pages.length]);

  // 상대방 입장시 최근 메시지로 스크롤다운
  useEffect(() => {
    if (!enterMember) return;
    if (enterMember !== user?.nickname) {
      queryClient.removeQueries({ queryKey: [QUERY_KEY_MESSAGE, roomId] });
      refetch();
    }
  }, [enterMember]);

  // 메시지 생길때마다 스크롤다운
  useEffect(() => {
    if (!messagesContainerRef.current) return;
    messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
  }, [messages.length]);

  // 모달창 꺼질때, 채팅방 리스트 업데이트
  useEffect(() => {
    return () => {
      queryClient.removeQueries({ queryKey: [QUERY_KEY_CHAT_ROOM] });
    };
  }, []);

  // TODO: 로딩 스피너 넣기

  return (
    <ChatModalLayout>
      <ImageWrapper>
        <img src={image || DefaultProfile} alt='profile_img' />
      </ImageWrapper>
      <MessageListLayout ref={messagesContainerRef}>
        {isFetching ? <div></div> : <div ref={loadMoreRef} style={{ height: '1px' }}></div>}
        {data?.pages
          .slice()
          .reverse()
          .map((page, pageIndex) => (
            <Messages messageList={page.dataList.slice().reverse()} key={pageIndex} />
          ))}
        <Messages messageList={messages} />
      </MessageListLayout>
      <InputWrapper>
        <Input
          type='text'
          placeholder='채팅을 입력해주세요.'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          status='chat'
        />
      </InputWrapper>
    </ChatModalLayout>
  );
};

export default ChatModal;

const ChatModalLayout = styled.div`
  position: absolute;
  width: 100%;
  padding: 6rem 2rem 2rem 2rem;
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

const MessageListLayout = styled.div`
  width: 100%;
  height: 100%;
  gap: 0.8rem;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  ${scrollNone};
`;
