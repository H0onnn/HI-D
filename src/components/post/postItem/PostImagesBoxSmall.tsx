import React from 'react';
import styled from 'styled-components';

interface Props {
  images: string[];
}
const PostImagesBoxSmall = ({ images }: Props) => {
  return (
    <Container>
      {images?.map((image, idx) => (
        <ImageWrapper key={idx}>
          <img src={image} alt='post image' />
        </ImageWrapper>
      ))}
    </Container>
  );
};
export default PostImagesBoxSmall;

const Container = styled.div`
  display: flex;
  gap: 0.4rem;
  /* overflow: hidden; */
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  background-color: gray;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 0.4rem;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
