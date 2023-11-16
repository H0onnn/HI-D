import React from 'react';
import useMyComments from '@/hooks/useMyComments';
import useObserver from '@/hooks/useObserver';
import ErrorContent from '@/components/public/ErrorContent';
import styled from 'styled-components';
import MyCommentItem from '../MyCommentItem';
import { colors } from '@/constants/colors';

interface MyCommentsListInterface {
  category: string;
}

const MyCommentsList = ({ category }: MyCommentsListInterface) => {
  const { data: myComments, moreDataHandler } = useMyComments(category);
  const loadMoreRef = useObserver(() => moreDataHandler());

  if (!myComments || myComments.pages[0].dataList.length === 0) {
    return <ErrorContent />;
  }

  return (
    <ListLayout>
      {myComments?.pages.map((page, pageIndex, pageArray) =>
        page.dataList.map((comment, commentIndex, commentArray) => {
          const isLastComment =
            pageIndex === pageArray.length - 1 && commentIndex === commentArray.length - 1;
          return (
            <>
              <MyCommentItem
                key={comment.replyId}
                ref={isLastComment ? loadMoreRef : null}
                title={comment.title}
                postId={comment.postId}
                content={comment.content}
                created_at={comment.createAt}
              />
            </>
          );
        }),
      )}
    </ListLayout>
  );
};

export default MyCommentsList;

const ListLayout = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: ${colors.pastel};
`;
