import React from 'react';
import styled, { RuleSet, css } from 'styled-components';
import { colors } from '@/constants/colors';
import DefaultProfile from '@/public/images/default_profile.svg';
import { imageStyle } from '@/styles/styles';

interface Props {
  writer?: string;
  profileImage?: string;
  size?: 'small' | 'medium';
  darkMode?: boolean;
}
export default function ProfileBox({
  writer = '익명',
  profileImage = DefaultProfile,
  size = 'medium',
  darkMode = false,
}: Props) {
  return (
    <Container>
      <ProfileImageWrapper>
        <img src={profileImage} alt='profile image' />
      </ProfileImageWrapper>
      <Nickname css={nicknameStyles(size, darkMode)}>{writer}</Nickname>
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
  background: ${colors.third};
  ${imageStyle};
`;

const Nickname = styled.div<{ css?: RuleSet<object> }>`
  ${(props) => props.css}
`;

const nicknameStyles = (size: Props['size'], darkMode?: Props['darkMode']) => {
  switch (size) {
    case 'small':
      return css`
        color: ${darkMode ? `${colors.white}` : `${colors.black}`};
        font-size: 12px;
      `;
    case 'medium':
      return css`
        color: ${colors.black};
        font-size: 16px;
        font-weight: 700;
      `;
    default:
      return css``;
  }
};
