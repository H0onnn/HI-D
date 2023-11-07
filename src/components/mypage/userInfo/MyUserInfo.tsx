import React from 'react';
import useUser from '@/hooks/useUser';
import styled from 'styled-components';
import { colors } from '@/constants/colors';
import EDIT_ICON from '@/public/images/ui/edit_white.svg';

const MyUserInfo = () => {
  const { user } = useUser();

  return (
    <Layout>
      <NickNameWrapper>
        <Nickname>{user?.nickname}</Nickname>
        <ProfileEditButton src={EDIT_ICON} alt='edit_button' />
      </NickNameWrapper>
      <SchoolMajorContainer>
        <School>{user?.school}</School>
        <LineDiv />
        <Major>{user?.major}</Major>
      </SchoolMajorContainer>
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

const ProfileEditButton = styled.img`
  width: 2.4rem;
  height: 2.4rem;
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
