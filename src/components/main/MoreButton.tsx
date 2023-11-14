import React from 'react';
import { colors } from '@/constants/colors';
import ArrowIcon from '@/public/images/ui/arrow_icon.svg';
import styled from 'styled-components';
import { imageStyle } from '@/styles/styles';

const MoreButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <Button onClick={onClick}>
      <span>최신글&nbsp;</span>더보기
      <ImageWrapper>
        <img src={ArrowIcon} />
      </ImageWrapper>
    </Button>
  );
};
export default MoreButton;

const Button = styled.div`
  margin: 2rem 0;
  cursor: pointer;
  width: 100%;
  height: 4.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.2rem;
  border: 1px solid ${colors.gray3};
  background: ${colors.white};
  font-size: 14px;
  color: ${colors.gray6};
  > span {
    color: ${colors.primary};
  }
`;
const ImageWrapper = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  ${imageStyle}
`;
