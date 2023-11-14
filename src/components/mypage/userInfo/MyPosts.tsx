import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '@/constants/colors';
import { LINK } from '@/constants/links';
import { UserDataInterface } from '@/types/user';

const MyPosts = ({ user }: { user: UserDataInterface | undefined }) => {
  const postsInfo = [
    {
      title: '북마크',
      count: user?.bookmarkCount,
      link: LINK.MY_BOOKMARKS,
    },
    {
      title: '내가 쓴 글',
      count: user?.postCount,
      link: LINK.MY_POSTS,
    },
    {
      title: '내가 쓴 댓글',
      count: user?.replyCount,
      link: LINK.MY_COMMENTS,
    },
  ];

  return (
    <Layout>
      {postsInfo.map((postInfo, index) => {
        return (
          <PostLink to={postInfo.link} key={index}>
            <PostTitle>{postInfo.title}</PostTitle>
            <PostCount>{postInfo.count}건</PostCount>
          </PostLink>
        );
      })}
    </Layout>
  );
};

export default MyPosts;

const Layout = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
  background-color: ${colors.white};
  padding: 2rem 0;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.16);
`;

const PostLink = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
  border-right: 1px solid ${colors.gray1};

  &:last-child {
    border-right: none;
  }

  text-decoration: none;
`;

const PostTitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: ${colors.black};
`;

const PostCount = styled.p`
  font-size: 20px;
  font-weight: bold;
  line-height: 30px;
  color: ${colors.primary};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
