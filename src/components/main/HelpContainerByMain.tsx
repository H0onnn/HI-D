import React, { useEffect, useState } from 'react';
import { PostInterface } from '../../types/post';
import styled from 'styled-components';
import NewPostList from './NewPostList';
import HelpPost from '../post/HelpPost';
import { useNavigate } from 'react-router-dom';
import { LINK } from '@/constants/links';
import MoreButton from './MoreButton';
import { getDailyHotPostList, getHelpPostListByMain } from '@/services/main';
import { PostListLayout, PostListWrapper } from '@/styles/post';
import ErrorContent from '../public/ErrorContent';
import LoadingContent from '../public/LoadingContent';

const HelpContainerByMain = () => {
  const navigate = useNavigate();
  const [postList, setPostList] = useState<PostInterface[]>([]);
  const [dailyHotPostList, setDailyHotPostList] = useState<PostInterface[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    getHelpPostListByMain()
      .then((response) => {
        setPostList(response.dataList);
      })
      .catch(() => {
        setError(true);
      });
    setLoading(false);
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
        {loading && <LoadingContent />}
        {!loading && error && <ErrorContent />}
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
