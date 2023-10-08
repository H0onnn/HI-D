import React, { useState } from 'react';
import styled from 'styled-components';
import { ChatRoomInterface } from '../../types/chat';
import { URL } from '../../constants/url';
import ChatItemSettingModal from './ChatItemSettingModal';
import useBodyScrollLock from '../../hooks/useBodyScrollLock';

type Props = {
  chatRoom: ChatRoomInterface;
  chatRoomClick: () => void;
};

const ChatRoomItem = ({
  chatRoom: { roomId, members, recentChatContent, recentChatTime },
  chatRoomClick,
}: Props) => {
  const myId = '2'; // 전역변수
  const member = members.filter((member) => member.id !== myId)[0];
  const { lockScroll } = useBodyScrollLock();
  const [modal, setModal] = useState<boolean>(false);

  const chatItemSettingHandler = (roomId: number) => {
    // 채팅 삭제 하기 & 신고하기 모달
    console.log(roomId);
    setModal(true);
    lockScroll();
  };
  const position = '';

  return (
    <>
      {/* <BackDrop ref={modalBackground} onClick={closeModalHanlder} /> */}
      <ComponentLayout onClick={chatRoomClick}>
        <ImageWrapper>
          <ProfileImage src={member.profileImage || URL.DEFAULT_PROFILE_IMG} alt='your_profile' />
        </ImageWrapper>
        <ContentsContainer>
          <div>
            <Nickname>{member.nickname}</Nickname>
            <ChatItemSetting onClick={() => chatItemSettingHandler(roomId)}>
              ...
              {modal && <ChatItemSettingModal position={position} setModal={setModal} />}
            </ChatItemSetting>
          </div>
          <div>
            <Chat>{recentChatContent}</Chat>
            <ChatTime>{recentChatTime}</ChatTime>
          </div>
        </ContentsContainer>
      </ComponentLayout>
    </>
  );
};
export default ChatRoomItem;

const ComponentLayout = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2rem 1.8rem;
  gap: 0.8rem;
  border-radius: 0.8rem;
  background: #fff;
`;
const ImageWrapper = styled.div`
  flex: none;
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  overflow: hidden;
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
const Nickname = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--, #252424);
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
`;
const ChatItemSetting = styled.div`
  /* z-index: 49; */
  cursor: pointer;
  position: relative;
  flex: none;
  width: 2.4rem;
  height: 2.4rem;
  > img {
    width: 100%;
    height: 100%;
  }
`;

const Chat = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: var(--6, #454545);
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;
const ChatTime = styled.div`
  flex: none;
  color: var(--6, #454545);
  font-family: SUIT;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  margin: auto 0;
`;

// const BackDrop = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.7);
//   z-index: 99;
//   overflow: hidden;
// `;
