import React from 'react';
import LoadingImage from '@/public/images/loading.svg';
import styled from 'styled-components';
import { colors } from '@/constants/colors';
import { imageStyle } from '@/styles/styles';

const LoadingContent = () => {
  return (
    <Layout>
      <ImageWrapper>
        <img src={LoadingImage} alt='loading_image' />
      </ImageWrapper>
      <Text>{'Loading...'}</Text>
    </Layout>
  );
};
export default LoadingContent;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 2rem;
  padding: 5rem 0 15rem 0;
`;
const ImageWrapper = styled.div`
  width: 12rem;
  ${imageStyle}
`;
const Text = styled.div`
  color: ${colors.secondary};
  font-size: 16px;
  font-weight: 700;
`;
