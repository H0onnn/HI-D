import React from 'react';
import styled from 'styled-components';
import { colors } from '../constants/colors';

interface BottomNavButtonInterface {
  src: string;
  alt: string;
  text: string;
  onClick: () => void;
  $active?: boolean;
}

const BottomNavButton = ({
  text,
  src,
  alt,
  onClick,
  $active,
  ...props
}: BottomNavButtonInterface) => {
  return (
    <BottomBtnContainer onClick={onClick} {...props}>
      <BtnImg src={src} alt={alt} $active={$active} />
      <BtnText $active={$active}>{text}</BtnText>
    </BottomBtnContainer>
  );
};

export default BottomNavButton;

const BottomBtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  gap: 0.4rem;
`;

const BtnImg = styled.img<{ $active?: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const BtnText = styled.p<{ $active?: boolean }>`
  font-size: 14px;
  font-weight: bold;
  color: ${({ $active }) => ($active ? colors.primary : colors.gray3)};
`;
