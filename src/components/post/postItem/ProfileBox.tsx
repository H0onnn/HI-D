import React from 'react';
import styled, { RuleSet, css } from 'styled-components';
import defaultProfile from '@/public/images/elephant.png';

interface Props {
  writer: string;
  profileImage: string;
  size?: 'small' | 'medium';
  darkMode?: boolean;
}
export default function ProfileBox({
  writer,
  profileImage,
  size = 'small',
  darkMode = false,
}: Props) {
  return (
    <Container>
      <ProfileImageWrapper>
        <ProfileImage src={profileImage || defaultProfile} alt='profile image' />
      </ProfileImageWrapper>
      <Nickname css={nicknameStyles(size, darkMode)}>{writer || '익명'}</Nickname>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  gap: 0.4rem;
  align-items: center;
  justify-content: center;
`;

const ProfileImageWrapper = styled.div`
  width: 2rem;
  height: 2rem;
  overflow: hidden;
  border-radius: 100%;
  background: #d9d9d9;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Nickname = styled.div<{ css?: RuleSet<object> }>`
  color: #2d2d2d;
  font-family: SUIT;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  ${(props) => props.css}
`;

const nicknameStyles = (size: Props['size'], darkMode?: Props['darkMode']) => {
  switch (size) {
    case 'small':
      return css`
        color: ${darkMode ? '#E7E9FF' : '#a3a3a3'};
        font-size: 12px;
        font-weight: 400;
      `;
    case 'medium':
      return css`
        color: #2d2d2d;
        font-size: 16px;
        font-weight: 700;
      `;
    default:
      return css``;
  }
};
