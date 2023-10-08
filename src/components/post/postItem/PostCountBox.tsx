import React from 'react';
import styled from 'styled-components';
import RecommendIcon from '@/public/images/favorite.png';
import ReplyIcon from '@/public/images/reply.png';
import ViewIcon from '@/public/images/view.png';

interface PostCountInterface {
  recommendCount: number;
  replyCount: number;
  viewCount: number;
  darkMode?: boolean;
}
const PostCountBox = ({
  recommendCount,
  replyCount,
  viewCount,
  darkMode = false,
}: PostCountInterface) => {
  const addFavorite = () => {};
  const countBoxStyles = {
    color: darkMode ? '#d8d8d8' : '#606060',
  };

  return (
    <Container>
      <CountBox style={countBoxStyles}>
        <ImageWrapper $darkMode={darkMode}>
          <img src={RecommendIcon} alt='favorite button' onClick={addFavorite} />
        </ImageWrapper>
        {recommendCount}
      </CountBox>
      <CountBox style={countBoxStyles}>
        <ImageWrapper>
          <img src={ReplyIcon} alt='reply Icon' />
        </ImageWrapper>
        {replyCount}
      </CountBox>
      <CountBox style={countBoxStyles}>
        <ImageWrapper>
          <img src={ViewIcon} alt='view Icon' />
        </ImageWrapper>
        {viewCount}
      </CountBox>
    </Container>
  );
};
export default PostCountBox;

const Container = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const ImageWrapper = styled.div<{ $darkMode?: boolean }>`
  width: 1.4rem;
  height: 1.4rem;
  overflow: hidden;
  border-radius: 50%;
  background-color: ${({ $darkMode }) => ($darkMode ? '#FFF' : '#F4F5FF')};
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const CountBox = styled.div<{ $darkMode?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  color: ${({ $darkMode }) => ($darkMode ? '#E7E9FF' : '#454545')};
  font-family: SUIT;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;
