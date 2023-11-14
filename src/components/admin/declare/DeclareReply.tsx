import { colors } from '@/constants/colors';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import DeclareItemContent from './DeclareDetailContent';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { LINK } from '@/constants/links';
import { ReportDetailReplyInterface } from '@/types/admin';
import useModalStore from '@/store/modalStore';
// import useBodyScrollLock from '@/hooks/useBodyScrollLock';
import { MODAL_TYPES } from '@/types/modal';
import { deleteComment } from '@/services/comments';
import toast from 'react-hot-toast';

const DeclareReply = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const postContent = searchParams.get('postContent');
  const replyContent = searchParams.get('replyContent');
  const postId = searchParams.get('postId');
  const { replyId } = useParams();
  const [dataList, setDataList] = useState<ReportDetailReplyInterface[]>([]);
  const { openModal, closeModal } = useModalStore();

  const deleteReplyHandler = async (reportId: number) => {
    closeModal();
    try {
      await deleteComment(reportId);
      navigate(LINK.ADMIN_DECLARE_REPLY);
      toast.success('게시글이 삭제되었어요.', { id: 'postDeleteSuccess' });
    } catch (err: unknown) {
      console.error('게시글 삭제 오류 : ', err);
      toast.error('게시글 삭제 중 오류가 발생했어요.', { id: 'postDeleteFail' });
    }
  };

  const deleteModalHandler = (replyId: number) => {
    openModal({
      modalType: MODAL_TYPES.ALERT,
      modalProps: {
        title: `해당 댓글을 삭제하시겠습니까?`,
        content: '삭제하면 해당 댓글이 사라지며 복구할 수 없어요',
        confirmText: '삭제',
        onConfirmHandler: () => deleteReplyHandler(replyId),
      },
    });
  };

  const movePostPageHandler = () => {
    navigate(`${LINK.POST}/${postId}`);
  };

  const fetchData = () => {
    setDataList([
      {
        replyReportId: 1,
        replyId: 1,
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
      <Title>게시글 보기</Title>
      <Content onClick={movePostPageHandler}>{postContent}</Content>
      <Title>신고 댓글 보기</Title>
      <Content onClick={movePostPageHandler}>{replyContent}</Content>
      <Title>신고 내역</Title>
      <ListWrapper>
        {dataList.map((data) => (
          <DeclareItemContent
            key={replyId}
            {...data}
            id={data.replyId}
            reportId={data.replyReportId}
            category={'reply'}
          />
        ))}
      </ListWrapper>
      <DeleteButton onClick={() => deleteModalHandler(Number(replyId))}>댓글 삭제하기</DeleteButton>
    </Layout>
  );
};

export default DeclareReply;

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
