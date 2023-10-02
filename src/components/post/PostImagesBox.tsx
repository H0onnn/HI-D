import React from 'react';
import styled, { RuleSet, css } from 'styled-components';

interface Props {
  images: string[];
  size?: 'small' | 'medium';
}
const PostImagesBox = ({ images, size = 'small' }: Props) => {
  return (
    <Container>
      {images.map((image, idx) => (
        <ImageWrapper key={idx} css={getImageWrapperStyle(size)}>
          <img src={image} alt='post image' />
        </ImageWrapper>
      ))}
    </Container>
  );
};
export default PostImagesBox;

const Container = styled.div`
  display: flex;
  gap: 0.4rem;
`;

const ImageWrapper = styled.div<{ css?: RuleSet<object> }>`
  ${(props) => props.css}
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const getImageWrapperStyle = (size: Props['size']) => {
  switch (size) {
    case 'small':
      return css`
        width: 2.4rem;
        height: 2.4rem;
        border-radius: 0.4rem;
      `;
    case 'medium':
      return css`
        width: 15rem;
        height: 12rem;
        border-radius: 0.8rem;
      `;
    default:
      return;
  }
};
