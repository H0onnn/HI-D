import React from 'react';
import styled from 'styled-components';

interface Props {
  images: string[];
}
const PostImagesBoxMedium = ({ images }: Props) => {
  const displayImages = images?.slice(0, 2);

  return (
    <Container>
      {displayImages.map((image, idx) => (
        <ImageWrapper key={idx}>
          <img src={image} alt='post image' />
        </ImageWrapper>
      ))}
    </Container>
  );
};
export default PostImagesBoxMedium;

const Container = styled.div`
  display: flex;
  gap: 1.2rem;
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  background-color: #d9d9d9;
  width: 100%;
  height: 12rem;
  border-radius: 0.8rem;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
