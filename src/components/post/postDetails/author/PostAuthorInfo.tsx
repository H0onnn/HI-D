import React from 'react';
import styled from 'styled-components';
import AuthorProfileImage from './AuthorProfileImage';
import UserNameAndSchoolInfo from './UserNameAndSchoolInfo';
import IconButton from '@/components/public/IconButton';
import { colors } from '@/constants/colors';
import CHAT_ICON from '@/public/images/ui/chat_icon.svg';
import usePostActionHandlers from '@/hooks/usePostActionHandlers';

interface PostAuthorInfoInterface {
  profileImageSrc: string;
  userName: string;
  schoolName: string;
  writerMajor: string;
  isAnonymous?: boolean;
  memberId: number;
  postActionHandlers: ReturnType<typeof usePostActionHandlers>;
}

const PostAuthorInfo = ({
  profileImageSrc,
  userName,
  schoolName,
  writerMajor,
  isAnonymous,
  memberId,
  postActionHandlers,
}: PostAuthorInfoInterface) => {
  const { enterChatRoomHandler } = postActionHandlers;

  return (
    <PostAuthorInfoLayout>
      <AuthorInfoContainer>
        <AuthorProfileImage src={profileImageSrc} />
        <UserNameAndSchoolInfo
          userName={userName}
          schoolName={schoolName}
          writerMajor={writerMajor}
        />
      </AuthorInfoContainer>
      {isAnonymous ? undefined : (
        <IconButton
          iconSrc={CHAT_ICON}
          alt='chat_icon'
          onClickHandler={() => enterChatRoomHandler(memberId)}
        />
      )}
    </PostAuthorInfoLayout>
  );
};

export default PostAuthorInfo;

const PostAuthorInfoLayout = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1.2rem;
  border-bottom: 1px solid ${colors.gray2};
`;

const AuthorInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
