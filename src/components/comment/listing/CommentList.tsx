import React from 'react';
import useObserver from '@/hooks/useObserver';
import useCommentQuery from '@/hooks/useCommentQuery';
import useCommentMutation from '@/hooks/useCommentMutation';
import styled from 'styled-components';
import { colors } from '@/constants/colors';
import CommentItem from './CommentItem';
import CommentTextArea from '../contentArea/CommentTextArea';

interface CommentListInterface {
  postId: number;
}

const CommentList = ({ postId }: CommentListInterface) => {
  const { data, moreDataHandler } = useCommentQuery(postId);
  const { addComment } = useCommentMutation();
  const loadMoreRef = useObserver(() => moreDataHandler());

  const addCommentHandler = (commentContent: string) => {
    addComment({ postId, content: commentContent });
  };

  return (
    <>
      <CommentListLayout $commentsEmpty={!data?.pages || data.pages[0].dataList.length === 0}>
        <CommentItemWrapper>
          {data?.pages.map((page, pageIndex, pageArray) =>
            page.dataList.map((comment, commentIndex, commentArray) => {
              const isLastComment =
                pageIndex === pageArray.length - 1 && commentIndex === commentArray.length - 1;

              return (
                <CommentItem
                  key={comment.replyId}
                  ref={isLastComment ? loadMoreRef : null}
                  replyId={comment.replyId}
                  postId={postId}
                  writer_image={comment.writer.imageUrl}
                  writer_name={comment.writer.nickname}
                  content={comment.content}
                  created_at={comment.createAt}
                  comment_like={comment.recommendCount}
                  isMine={comment.mine}
                  isRecommended={comment.recommend}
                />
              );
            }),
          )}
        </CommentItemWrapper>
        <CommentTextArea onAddComment={addCommentHandler} />
      </CommentListLayout>
    </>
  );
};

export default CommentList;

const CommentListLayout = styled.div<{ $commentsEmpty: boolean }>`
  width: 100%;
  border-radius: 8px;
  padding: 0 1.5rem;
  background-color: ${(props) => (props.$commentsEmpty ? 'transparent' : colors.gray1)};
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const CommentItemWrapper = styled.div`
  width: 100%;

  & > div:last-of-type {
    border-bottom: none;
  }
`;
