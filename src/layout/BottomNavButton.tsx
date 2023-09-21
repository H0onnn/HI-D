import React from 'react';
import styled from 'styled-components';
import { colors } from '../constants/colors';

interface BottomNavButtonInterface {
  // src: string; // 피그마에 icon 나오면 이미지 text를 이미지로 변경
  // alt: string;
  text: string;
  onClick: () => void;
}

const BottomNavButton = ({ text, onClick, ...props }: BottomNavButtonInterface) => {
  return (
    <BottomBtnContainer onClick={onClick} {...props}>
      <BtnText>{text}</BtnText>
    </BottomBtnContainer>
  );
};

export default BottomNavButton;

const BottomBtnContainer = styled.div`
  padding: 0 14px;
`;

const BtnText = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.font};
`;
