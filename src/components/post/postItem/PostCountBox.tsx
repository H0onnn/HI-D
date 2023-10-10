import React from 'react';
import styled from 'styled-components';
import RecommendIcon from '@/public/images/favorite.png';
import ReplyIcon from '@/public/images/reply.png';
import ViewIcon from '@/public/images/view.png';
import { colors } from '@/constants/colors';
import { PostCountInterface } from '@/types/post';

const PostCountBox = ({
  recommendCount,
  replyCount,
  viewCount,
  darkMode = false,
}: PostCountInterface) => {
  const addFavorite = () => {};

  return (
    <Container>
      {countItem(RecommendIcon, recommendCount, darkMode, addFavorite)}
      {countItem(ReplyIcon, replyCount, darkMode)}
      {countItem(ViewIcon, viewCount, darkMode)}
    </Container>
  );
};

const countItem = (icon: string, count: number, darkMode: boolean, clickHandler?: () => void) => (
  <CountBox $darkMode={darkMode} onClick={clickHandler}>
    <ImageWrapper $darkMode={darkMode}>
      <img src={icon} alt='icon' />
    </ImageWrapper>
    {count}
  </CountBox>
);

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
  background-color: ${({ $darkMode }) => ($darkMode ? colors.white : '#F4F5FF')};
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
