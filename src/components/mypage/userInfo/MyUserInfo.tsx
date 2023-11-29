import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { colors } from '@/constants/colors';
import EDIT_ICON from '@/public/images/ui/edit_white.svg';
import { LINK } from '@/constants/links';
import { UserDataInterface } from '@/types/user';

const MyUserInfo = ({ user }: { user: UserDataInterface | undefined }) => {
  const isAdmin = user?.roles.includes('ROLE_MANAGER') ?? false;

  return (
    <Layout>
      <NickNameWrapper>
        <Nickname>{user?.nickname}</Nickname>
        <ProfileEditLink to={LINK.EDIT_PROFILE}>
          <ProfileEditIcon src={EDIT_ICON} alt='edit_button' />
        </ProfileEditLink>
      </NickNameWrapper>
      {isAdmin ? (
        <SchoolMajorContainer>
          <School>관리자</School>
        </SchoolMajorContainer>
      ) : (
        <SchoolMajorContainer>
          <School>{user?.school}</School>
          <LineDiv />
          <Major>{user?.major}</Major>
        </SchoolMajorContainer>
      )}
    </Layout>
  );
};

export default MyUserInfo;

const Layout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 0.5rem;
`;

const NickNameWrapper = styled.div`
  width: 25rem;
  height: 2.5rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const Nickname = styled.p`
  font-size: 26px;
  font-weight: 600;
  line-height: 22px;
  color: ${colors.white};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ProfileEditLink = styled(Link)`
  width: 2.4rem;
  height: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
`;

const ProfileEditIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const SchoolMajorContainer = styled.div`
  width: 25rem;
  height: 2rem;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: ${colors.white};
`;

const School = styled.p``;

const Major = styled.p``;

const LineDiv = styled.div`
  width: 0.1rem;
  height: 1.5rem;
  background-color: ${colors.white};
  display: flex;
  align-self: center;
`;
