import React from 'react';
import styled from 'styled-components';
import { ChatRoomInterface } from '../../types/chat';
import { colors } from '@/constants/colors';
import DefaultProfile from '@/public/images/default_profile.svg';
import { formatTimeAgo } from '@/utils/post';
import { ChatRoomItemLayout } from '@/styles/chat';
import MessageNickname from './MessageNickname';

type Props = {
  chatRoom: ChatRoomInterface;
  chatRoomClick: () => void;
};

const ChatRoomItem = ({
  chatRoom: {
    chatRoomId,
    member: { imageUrl = DefaultProfile, nickname },
    recentChatMessage: { content, createAt },
  },
  chatRoomClick,
}: Props) => {
  return (
    <ChatRoomItemLayout onClick={chatRoomClick}>
      <ImageWrapper>
        <ProfileImage src={imageUrl} alt='your_profile' />
      </ImageWrapper>
      <ContentsContainer>
        <div>
          <MessageNickname nickname={nickname} />
          <button
            onClick={() => {
              console.log(chatRoomId);
            }}
          >
            삭제
          </button>
        </div>
        <div>
          <Chat>{content}</Chat>
          <ChatTime>{formatTimeAgo(createAt)}</ChatTime>
        </div>
      </ContentsContainer>
    </ChatRoomItemLayout>
  );
};
export default ChatRoomItem;

const ImageWrapper = styled.div`
  flex: none;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  overflow: hidden;
  background-color: ${colors.third};
`;
const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ContentsContainer = styled.div`
  flex: auto;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  > div {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
  }
`;

const Chat = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${colors.gray6};
  font-size: 14px;
`;
const ChatTime = styled.div`
  flex: none;
  color: ${colors.gray6};
  font-size: 12px;
  margin: auto 0;
`;
