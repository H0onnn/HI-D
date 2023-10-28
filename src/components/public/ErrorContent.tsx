import React from 'react';
import ErrorImage from '@/public/images/404.svg';
import styled from 'styled-components';
import { colors } from '@/constants/colors';

const ErrorContent = ({ errorMessage }: { errorMessage: string }) => {
  return (
    <Layout>
      <ImageWrapper>
        <img src={ErrorImage} alt='error_image' />
      </ImageWrapper>
      <Text>{errorMessage}</Text>
    </Layout>
  );
};
export default ErrorContent;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 2rem;
  padding-bottom: 15rem;
`;
const ImageWrapper = styled.div`
  width: 12rem;
  > img {
    width: 100%;
    height: 100%;
  }
`;
const Text = styled.div`
  color: ${colors.gray6};
  font-size: 16px;
`;
