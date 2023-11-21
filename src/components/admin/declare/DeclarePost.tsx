import { colors } from '@/constants/colors';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import DeclareDetailContent from './DeclareDetailContent';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { LINK } from '@/constants/links';
import { MODAL_TYPES } from '@/types/modal';
import useModalStore from '@/store/modalStore';
import { postDelete } from '@/services/postActions';
import toast from 'react-hot-toast';
import useDeclarePosts from '@/hooks/useDeclarePosts';

const DeclarePost = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const postContent = searchParams.get('postContent');
  const { postId } = useParams();
  const { data, refetch } = useDeclarePosts(postId || '');
  const { openModal, closeModal, modalOpen } = useModalStore();

  const deletePostHandler = async (postId: number) => {
    try {
      await postDelete(postId);
      navigate(LINK.ADMIN_DECLARE);
      toast.success('게시글이 삭제되었어요.', { id: 'postDeleteSuccess' });
    } catch (err: unknown) {
      console.error('게시글 삭제 오류 : ', err);
      toast.error('게시글 삭제 중 오류가 발생했어요.', { id: 'postDeleteFail' });
    }
    closeModal();
  };

  const deleteModalHandler = (postId: number) => {
    openModal({
      modalType: MODAL_TYPES.ALERT,
      modalProps: {
        title: `해당 게시물을 삭제하시겠습니까?`,
        content: '삭제하면 해당 글이 사라지며 복구할 수 없어요',
        confirmText: '삭제',
        onConfirmHandler: () => deletePostHandler(postId),
      },
    });
  };

  const movePostPageHandler = () => {
    navigate(`${LINK.POST}/${postId}`);
  };

  useEffect(() => {
    if (modalOpen) return;
    refetch();
  }, [modalOpen]);

  if (!data || data.pages[0].dataList.length === 0) {
    navigate(LINK.ADMIN_DECLARE);
  }

  return (
    <Layout>
      <Title>신고 게시글 보기</Title>
      <Content onClick={movePostPageHandler}>{postContent}</Content>
      <Title>신고 내역</Title>
      <ListWrapper>
        {data?.pages.map((page) =>
          page.dataList.map((data) => (
            <DeclareDetailContent
              key={postId}
              id={data.postId}
              reportId={data.postReportId}
              category='post'
              {...data}
            />
          )),
        )}
      </ListWrapper>
      <DeleteButton onClick={() => deleteModalHandler(Number(postId))}>글 삭제하기</DeleteButton>
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
  background: red;
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
