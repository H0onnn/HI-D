import React from 'react';
import styled from 'styled-components';
import { colors } from '@/constants/colors';
import AuthorProfileImage from './AuthorProfileImage';
import UserNameAndSchoolInfo from './UserNameAndSchoolInfo';
import LinkChatButton from './LinkChatButton';

interface PostAuthorInfoInterface {
  profileImageSrc: string;
  userName: string;
  schoolName: string;
}

const PostAuthorInfo = ({ profileImageSrc, userName, schoolName }: PostAuthorInfoInterface) => {
  return (
    <PostAuthorInfoLayout>
      <AuthorInfoContainer>
        <AuthorProfileImage src={profileImageSrc} />
        <UserNameAndSchoolInfo userName={userName} schoolName={schoolName} />
      </AuthorInfoContainer>
      <LinkChatButton />
    </PostAuthorInfoLayout>
  );
};

export default PostAuthorInfo;

const PostAuthorInfoLayout = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.2rem;
  border-bottom: 1px solid ${colors.gray2};
  margin-bottom: 4rem;
`;

const AuthorInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
