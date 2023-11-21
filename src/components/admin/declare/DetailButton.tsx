import React from 'react';
import { colors } from '@/constants/colors';
import ArrowIcon from '@/public/images/ui/arrow_icon.svg';
import styled from 'styled-components';
import { imageStyle } from '@/styles/styles';

const DetailButton = () => {
  return (
    <Button>
      자세히 보기
      <ImageWrapper>
        <img src={ArrowIcon} />
      </ImageWrapper>
    </Button>
  );
};
export default DetailButton;

const Button = styled.div`
  cursor: pointer;
  width: 9rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  font-size: 14px;
  color: ${colors.gray6};
`;
const ImageWrapper = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  ${imageStyle}
`;
