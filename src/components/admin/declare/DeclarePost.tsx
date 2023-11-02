import { colors } from '@/constants/colors';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DeclareItemContent from './DeclareItemContent';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { LINK } from '@/constants/links';
import { ReportDetailPostInterface } from '@/types/admin';

const DeclarePost = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const postContent = searchParams.get('postContent');
  const { postId } = useParams();
  const [dataList, setDataList] = useState<ReportDetailPostInterface[]>([]);
  const movePostPageHandler = () => {
    navigate(`${LINK.POST_DETAIL}/${postId}`);
  };

  const fetchData = () => {
    setDataList([
      {
        postReportId: 1,
        postId: 1,
        content: '신고내용',
        reporter: '신고자',
        type: '신고유형',
      },
    ]);
  };

  useEffect(() => {
    fetchData();
  }, [postId]);

  return (
    <Layout>
      <Title>신고 게시글 보기</Title>
      <Content onClick={movePostPageHandler}>{postContent}</Content>
      <Title>신고 내역</Title>
      <ListWrapper>
        {dataList.map((data) => (
          <DeclareItemContent key={postId} {...data} />
        ))}
      </ListWrapper>
      <DeleteButton>글 삭제하기</DeleteButton>
    </Layout>
  );
};

export default DeclarePost;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  background: ${colors.white};
`;

const Title = styled.div`
  color: ${colors.black};
  font-size: 14px;
  margin: 0 0 0.4rem 1rem;
`;

const Content = styled.div`
  margin-bottom: 3rem;
  padding: 10px;
  display: flex;
  align-items: center;
  background: ${colors.background};
  color: ${colors.gray6};
  font-size: 16px;
  font-weight: 700;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const DeleteButton = styled.div`
  cursor: pointer;
  margin: 2rem 0;
  height: 4.8rem;
  padding: 1rem 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;
  background: ${colors.primary};
  color: ${colors.white};
  text-align: center;
  font-size: 16px;
  font-weight: 700;
`;
