import React from 'react';
import styled from 'styled-components';
import RecommendIcon from '@/public/images/favorite.png';
import ReplyIcon from '@/public/images/reply.png';
import ViewIcon from '@/public/images/view.png';

interface PostCountInterface {
  recommendCount: number;
  replyCount: number;
  viewCount: number;
  DarkMode?: boolean;
}
const PostCountBox = ({
  recommendCount,
  replyCount,
  viewCount,
  DarkMode = true,
}: PostCountInterface) => {
  const addFavorite = () => {};
  const countBoxStyles = {
    color: DarkMode ? '#d8d8d8' : '#606060',
  };

  return (
    <Container>
      <CountBox style={countBoxStyles}>
        <ImageWrapper>
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

const ImageWrapper = styled.div`
  width: 1.4rem;
  height: 1.4rem;
  > img {
    width: 100%;
    height: 100%;
  }
`;
const CountBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-family: SUIT;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;
