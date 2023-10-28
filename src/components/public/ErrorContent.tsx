import React from 'react';
import ErrorImage from '@/public/images/404.svg';
import styled from 'styled-components';
import { colors } from '@/constants/colors';
import { useLocation } from 'react-router-dom';
import { errorMessages } from '@/constants/errors';
import { imageStyle } from '@/styles/styles';

const ErrorContent = () => {
  const location = useLocation();
  const errorMessage: string =
    errorMessages.find((e) => location.pathname.includes(e.path))?.message ||
    errorMessages[0].message;

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
  padding: 5rem 0 15rem 0;
`;
const ImageWrapper = styled.div`
  width: 12rem;
  ${imageStyle}
`;
const Text = styled.div`
  color: ${colors.gray6};
  font-size: 16px;
`;
