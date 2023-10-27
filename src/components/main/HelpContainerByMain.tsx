import React, { useEffect, useState } from 'react';
import { Post } from '../../types/post';
import styled from 'styled-components';
import NewPostList from './NewPostList';
import HelpPost from '../post/HelpPost';
import { useNavigate } from 'react-router-dom';
import { LINK } from '@/constants/links';
import MoreButton from './MoreButton';
import { getDailyHotPostList, getHelpPostListByMain } from '@/api/services/main';
import { PostListLayout, PostListWrapper } from '@/styles/post';

const HelpContainerByMain = () => {
  const navigate = useNavigate();
  const [postList, setPostList] = useState<Post[]>([]);
  const [dailyHotPostList, setDailyHotPostList] = useState<Post[]>([]);

  useEffect(() => {
    getHelpPostListByMain().then((response) => {
      setPostList(response.dataList);
    });
  }, []);
  useEffect(() => {
    getDailyHotPostList().then((response) => {
      setDailyHotPostList(response.dataList);
    });
  }, []);

  return (
    <PostListLayout>
      <ScrollPostListWrapper>
        <NewPostList postList={dailyHotPostList} />
      </ScrollPostListWrapper>
      <PostListWrapper>
        {postList.map((post) => (
          <HelpPost post={post} key={post.postId} />
        ))}
        <MoreButton onClick={() => navigate(LINK.POST_HELP)} />
      </PostListWrapper>
    </PostListLayout>
  );
};

export default HelpContainerByMain;

const ScrollPostListWrapper = styled.div`
  padding: 3.2rem 0 0 0;
`;
