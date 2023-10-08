import React, { useState } from 'react';
import styled from 'styled-components';
import { ChatRoomInterface } from '../../types/chat';
import { URL } from '../../constants/url';
import SettingModal from '../public/SettingModal';
import useBodyScrollLock from '../../hooks/useBodyScrollLock';
import { colors } from '@/constants/colors';

type Props = {
  chatRoom: ChatRoomInterface;
  chatRoomClick: () => void;
};

const ChatRoomItem = ({
  chatRoom: { roomId, members, recentChatContent, recentChatTime },
  chatRoomClick,
}: Props) => {
  const myId = 2; // 전역변수
  const member = members.filter((member) => member.id !== myId)[0];
  const { lockScroll } = useBodyScrollLock();
  const [modal, setModal] = useState<boolean>(false);

  const chatItemSettingHandler = (roomId: number) => {
    console.log(roomId);
    setModal(true);
    lockScroll();
  };
  const position = '';

  return (
    <>
      <ModalWrpper>
        <ComponentLayout onClick={chatRoomClick}>
          <ImageWrapper>
            <ProfileImage src={member.profileImage || URL.DEFAULT_PROFILE_IMG} alt='your_profile' />
          </ImageWrapper>
          <ContentsContainer>
            <div>
              <Nickname>{member.nickname}</Nickname>
            </div>
            <div>
              <Chat>{recentChatContent}</Chat>
              <ChatTime>{recentChatTime}</ChatTime>
            </div>
          </ContentsContainer>
        </ComponentLayout>
        <ChatItemSetting onClick={() => chatItemSettingHandler(roomId)}>...</ChatItemSetting>
        {modal && (
          <SettingModal position={position} setModal={setModal} settingList={settingList} />
        )}
      </ModalWrpper>
    </>
  );
};
export default ChatRoomItem;

const deleteChatRoomHandler = () => {};
const reportChatRoomHandler = () => {};
const settingList = [
  { title: '채팅방 나가기', icon: '', clickHandler: deleteChatRoomHandler },
  { title: '신고하기', icon: '', clickHandler: reportChatRoomHandler },
];

const ComponentLayout = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2rem 1.8rem;
  gap: 0.8rem;
  border-radius: 0.8rem;
  background: ${colors.white};
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
  padding-right: 5rem;
  color: var(--, #252424);
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
`;
const ChatItemSetting = styled.div`
  position: absolute;
  right: 1.8rem;
  top: 2rem;
  flex: none;
  cursor: pointer;
  width: 2.4rem;
  height: 2.4rem;
  > img {
    width: 100%;
    height: 100%;
    position: relative;
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
const ModalWrpper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
