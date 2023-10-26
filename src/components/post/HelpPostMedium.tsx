import React from 'react';
import styled from 'styled-components';
import { PostProps } from '../../types/post';
import { formatTime } from '../../utils/post';
import PostCountBox from './postItem/PostCountBox';
import PostImagesBoxMedium from './postItem/PostImagesBoxMedium';
import { colors } from '@/constants/colors';

const HelpPostMedium = ({
  post: { title, content, viewCount, recommendCount, replyCount, createAt, thumbnailImages },
  onClick,
}: PostProps) => {
  return (
    <Layout onClick={onClick}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Title>{title}</Title>
        <TimeBox>{formatTime(createAt)}</TimeBox>
      </div>
      <Contents>{content}</Contents>
      <PostImagesBoxMedium images={thumbnailImages} />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div></div>
        <PostCountBox
          recommendCount={recommendCount}
          replyCount={replyCount}
          viewCount={viewCount}
        />
      </div>
    </Layout>
  );
};
export default HelpPostMedium;

const Layout = styled.div`
  cursor: pointer;
  width: 100%;
  padding: 1.2rem 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  border-radius: 0.8rem;
  background: ${colors.white};
  &:hover {
    box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.1);
    scale: 1.01;
  }
  &:active {
    box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.1);
    scale: 1.01;
  }
`;
const Title = styled.div`
  color: ${colors.black};
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-right: 2rem;
  div {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
const TimeBox = styled.div`
  display: flex;
  align-items: center;
  color: ${colors.gray6};
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;
const Contents = styled.div`
  color: ${colors.gray6};
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;
