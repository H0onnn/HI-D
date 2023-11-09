import React from 'react';
import useUser from '@/hooks/useUser';
import styled from 'styled-components';
import MyUserInfo from '../userInfo/MyUserInfo';
import MyPosts from '../userInfo/MyPosts';
import MyPageActions from '../actions/MyPageActions';

const Contents = () => {
  const { user } = useUser();

  return (
    <Layout>
      <MyUserInfo user={user} />
      <MyPosts user={user} />
      <MyPageActions />
    </Layout>
  );
};

export default Contents;

const Layout = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 2rem;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  position: relative;
  bottom: 12rem;
`;
