import React from 'react';
import styled from 'styled-components';
import NewPostList from './NewPostList';
import HelpPost from '../post/HelpPost';
import { useNavigate } from 'react-router-dom';
import { LINK } from '@/constants/links';
import MoreButton from './MoreButton';
import { PostListLayout, PostListWrapper } from '@/styles/post';
import useMainPosts from '@/hooks/useMainPosts';

const HelpContainerByMain = () => {
  const navigate = useNavigate();
  const { helpPosts } = useMainPosts();

  const moreButtonClickHandler = () => {
    navigate(LINK.POST_HELP);
  };

  return (
    <PostListLayout>
      <ScrollPostListWrapper>
        <NewPostList />
      </ScrollPostListWrapper>
      <PostListWrapper>
        {helpPosts?.map((post) => <HelpPost post={post} key={post.postId} />)}
        <MoreButton onClick={moreButtonClickHandler} />
      </PostListWrapper>
    </PostListLayout>
  );
};

export default HelpContainerByMain;

const ScrollPostListWrapper = styled.div`
  padding: 3.2rem 0 0 0;
`;
