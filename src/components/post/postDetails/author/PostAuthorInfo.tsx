import React from 'react';
import styled from 'styled-components';
import { colors } from '@/constants/colors';
import AuthorProfileImage from './AuthorProfileImage';
import UserNameAndSchoolInfo from './userNameAndSchoolInfo';
import LinkChatButton from './LinkChatButton';

interface PostAuthorInfoInterface {
  profileImageSrc: string;
  userName: string;
  schoolName: string;
}

const PostAuthorInfo = ({ profileImageSrc, userName, schoolName }: PostAuthorInfoInterface) => {
  return (
    <PostAuthorInfoLayout>
      <AuthorProfileImage src={profileImageSrc} />
      <UserNameAndSchoolInfo userName={userName} schoolName={schoolName} />
      <LinkChatButton />
    </PostAuthorInfoLayout>
  );
};

export default PostAuthorInfo;

const PostAuthorInfoLayout = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  padding-bottom: 1.2rem;
  border-bottom: 1px solid ${colors.gray2};
`;
