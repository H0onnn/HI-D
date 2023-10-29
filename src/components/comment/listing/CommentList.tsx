import React from 'react';
import useComments from '@/hooks/useComments';
import styled from 'styled-components';
import { colors } from '@/constants/colors';
import CommentItem from './CommentItem';
import CommentTextArea from '../contentArea/CommentTextArea';

interface CommentListInterface {
  postId: number;
}

const CommentList = ({ postId }: CommentListInterface) => {
  const { comments, addCommentHandler, loadMoreRef } = useComments(postId);

  return (
    <>
      <CommentListLayout $commentsEmpty={comments?.dataList.length === 0}>
        {comments?.dataList.map((comment, index) => (
          <CommentItem
            key={comment.replyId}
            ref={index === comments.dataList.length - 1 ? loadMoreRef : null}
            writer_image={comment.writer.imageUrl}
            writer_name={comment.writer.nickname}
            content={comment.content}
            created_at={comment.createAt}
            comment_like={comment.recommendCount}
          />
        ))}
        <CommentTextArea onAddComment={addCommentHandler} />
      </CommentListLayout>
    </>
  );
};

export default CommentList;

const CommentListLayout = styled.div<{ $commentsEmpty: boolean }>`
  width: 100%;
  border-radius: 8px;
  padding: 1.5rem;
  background-color: ${(props) => (props.$commentsEmpty ? 'transparent' : colors.gray1)};
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
`;
