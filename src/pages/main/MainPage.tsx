import React, { useEffect, useState } from 'react';
import { PageLayout } from '../../styles/styles';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { LINK } from '../../constants/links';
import MainSearchBar from '../../components/main/MainSearchBar';
import MainPageHeader from '../../components/main/MainPageHeader';
import { Post } from '../../types/post';
import PopularPostList from '../../components/main/PopularPostList';
import NewPostList from '../../components/main/NewPostList';

const MainPage = () => {
  const navigate = useNavigate();
  const [popularPostList, setPopularPostList] = useState<Post[]>([]);
  const [newPostList, setNewPostList] = useState<Post[]>([]);

  useEffect(() => {
    setPopularPostList([]);
    setNewPostList([]);
  }, []);
  return (
    <>
      <MainPageHeader />
      <PageLayout>
        <MainSearchBar onClick={() => navigate(LINK.SEARCH)} />
        <Title>9월 3주차 인기 게시물</Title>
        <PopularPostList postList={popularPostList} />
        <div>탭</div>
        <NewPostList postList={newPostList} />
        <div>??? help post</div>
      </PageLayout>
    </>
  );
};

export default MainPage;

const Title = styled.div`
  display: flex;
  width: 390px;
  padding: 10px 26px;
  align-items: center;
  gap: 10px;
  color: var(--, #252424);
  text-align: right;
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
`;
