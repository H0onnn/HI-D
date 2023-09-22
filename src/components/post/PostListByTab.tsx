import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { PostDetail } from '../../types/post';
import HelpPost from './HelpPost';
import FreePost from './FreePost';

type Props = {
  tabList: Tab[];
  fetchOptions?: string;
};

type Tab = {
  id: number;
  name: string;
  category: string;
};
export default function PostListByTab({ tabList, fetchOptions }: Props) {
  const [showTap, setShowTap] = useState<Tab>({ id: 1, name: '도움이 필요해요', category: 'help' });
  const [postList, setPostList] = useState<PostDetail[]>([]);

  const fetchPostList = async (params: string) => {
    // fetch post list by category
    // if (!category) all post list
    const response = await fetch(`API_URL/post?${params}`);
    const data = await response.json();
    // const response = {
    //   dataList: [
    //     {
    //       postId: '1',
    //       writer: 'sjm96',
    //       major: '컴퓨터공학과',
    //       category: 'free',
    //       title: '안녕하세요!',
    //       content:
    //         '내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다내용입니다',
    //       viewCount: '5',
    //       recommendCount: '1',
    //       replyCount: '2',
    //       images: [
    //         '/images/2023/09/17/22/becfa5-dba8-4aa5-8456-b4f0dd9dfdb8_abc',
    //         '/images/2023/09/17/22/becfa5-db18-42a5-8456-b4f0dd9dfdb8_cdf',
    //         '/images/2023/09/17/22/becfa5-dba8-4sda5-8456-b4f0d9dfdb8_fig',
    //       ],
    //       createAt: '2023-09-17T06:52:38.123Z',
    //       updateAt: '2023-09-17T06:52:38.123Z',
    //     },
    //     {
    //       postId: '1',
    //       writer: 'sjm96',
    //       major: '컴퓨터공학과',
    //       category: 'help',
    //       content: '내용입니다',
    //       title: '안녕하세요!',
    //       viewCount: '5',
    //       recommendCount: '1',
    //       replyCount: '2',
    //       images: [
    //         '/images/2023/09/17/22/becfa5-dba8-4aa5-8456-b4f0dd9dfdb8_abc',
    //         '/images/2023/09/17/22/becfa5-db18-42a5-8456-b4f0dd9dfdb8_cdf',
    //         '/images/2023/09/17/22/becfa5-dba8-4sda5-8456-b4f0d9dfdb8_fig',
    //       ],
    //       createAt: '2023-09-17T06:52:38.123Z',
    //       updateAt: '2023-09-17T06:52:38.123Z',
    //     },
    //     {
    //       postId: '1',
    //       writer: 'sjm96',
    //       major: '컴퓨터공학과',
    //       category: 'free',
    //       content: '내용입니다',
    //       title: '안녕하세요!',
    //       viewCount: '5',
    //       recommendCount: '1',
    //       replyCount: '2',
    //       images: [
    //         '/images/2023/09/17/22/becfa5-dba8-4aa5-8456-b4f0dd9dfdb8_abc',
    //         '/images/2023/09/17/22/becfa5-db18-42a5-8456-b4f0dd9dfdb8_cdf',
    //         '/images/2023/09/17/22/becfa5-dba8-4sda5-8456-b4f0d9dfdb8_fig',
    //       ],
    //       createAt: '2023-09-17T06:52:38.123Z',
    //       updateAt: '2023-09-17T06:52:38.123Z',
    //     },
    //     {
    //       postId: '1',
    //       writer: 'sjm96',
    //       major: '컴퓨터공학과',
    //       category: 'free',
    //       content: '내용입니다',
    //       title: '안녕하세요!',
    //       viewCount: '5',
    //       recommendCount: '1',
    //       replyCount: '2',
    //       images: [
    //         '/images/2023/09/17/22/becfa5-dba8-4aa5-8456-b4f0dd9dfdb8_abc',
    //         '/images/2023/09/17/22/becfa5-db18-42a5-8456-b4f0dd9dfdb8_cdf',
    //         '/images/2023/09/17/22/becfa5-dba8-4sda5-8456-b4f0d9dfdb8_fig',
    //       ],
    //       createAt: '2023-09-17T06:52:38.123Z',
    //       updateAt: '2023-09-17T06:52:38.123Z',
    //     },
    //     {
    //       postId: '1',
    //       writer: 'sjm96',
    //       major: '컴퓨터공학과',
    //       category: 'free',
    //       content: '내용입니다',
    //       title: '안녕하세요!',
    //       viewCount: '5',
    //       recommendCount: '1',
    //       replyCount: '2',
    //       images: [
    //         '/images/2023/09/17/22/becfa5-dba8-4aa5-8456-b4f0dd9dfdb8_abc',
    //         '/images/2023/09/17/22/becfa5-db18-42a5-8456-b4f0dd9dfdb8_cdf',
    //         '/images/2023/09/17/22/becfa5-dba8-4sda5-8456-b4f0d9dfdb8_fig',
    //       ],
    //       createAt: '2023-09-17T06:52:38.123Z',
    //       updateAt: '2023-09-17T06:52:38.123Z',
    //     },
    //   ],
    //   size: '1',
    //   next: 'false',
    // };
    // const data: PostList = await response;
    setPostList(data.dataList);
    console.log(data.dataList[0]);
    // setPostList([])
  };

  useEffect(() => {
    fetchPostList(`category=${showTap.category}&${fetchOptions}`);
  }, [showTap, fetchOptions]);

  return (
    <PostListByTabLayout>
      <TabBox>
        {tabList.map((tab, index) => (
          <TabText
            key={index}
            isseleced={tab.id === showTap.id ? 'true' : 'false'}
            onClick={() => setShowTap(tab)}
          >
            {tab.name}
          </TabText>
        ))}
      </TabBox>
      <PostListContainer>
        {postList.map((post, index) => (
          <React.Fragment key={index}>
            {(() => {
              switch (post.category) {
                case 'help':
                  return <HelpPost post={post} />;
                case 'free':
                  return <FreePost post={post} />;
                default:
                  return null;
              }
            })()}
          </React.Fragment>
        ))}
      </PostListContainer>
    </PostListByTabLayout>
  );
}
const PostListByTabLayout = styled.div``;
const TabBox = styled.div`
  display: flex;
  gap: 1.2rem;
  margin: 0 2rem;
`;
const TabText = styled.div<{ isseleced: string }>`
  height: 34px;

  border-bottom: ${({ isseleced }) => (isseleced === 'true' ? '2px solid #000' : 'none')};
  color: ${({ isseleced }) => (isseleced === 'true' ? '#000' : '##C8C8C8')};
  font-family: SUIT;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
`;

const PostListContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  gap: 1rem;

  display: flex;
  flex-direction: column;

  background: #f8f8f8;
  > div {
    width: 100%;
  }
`;
