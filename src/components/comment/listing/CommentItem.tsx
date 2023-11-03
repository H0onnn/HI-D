import React, { forwardRef } from 'react';
import useActionState from '@/hooks/useActionState';
import styled from 'styled-components';
import { colors } from '@/constants/colors';
import LIKE_ICON from '@/public/images/ui/like_fill.svg';
import MORE_ACTION from '@/public/images/ui/more_active.svg';
import IconButton from '@/components/public/IconButton';
import AuthorActionModal from '@/components/public/MoreActionModal';
import AuthorActionButtons from '@/components/public/MoreActionButtons';
import { timeSince } from '@/utils/caculateDate';

interface CommentItemInterface {
  commentId: number;
  writer_image: string;
  writer_name: string;
  content: string;
  created_at: string;
  comment_like: number;
  isMine: boolean;
}

const CommentItem = forwardRef<HTMLDivElement, CommentItemInterface>(
  ({ commentId, writer_image, writer_name, content, created_at, comment_like, isMine }, ref) => {
    const { isMoreActions, toggleMoreActions } = useActionState();

    return (
      <CommentItemLayout ref={ref}>
        <CommentWriterContainer>
          <CommentWriterInfo>
            <CommentWriterImg src={writer_image} alt='comment_writer_img' />
            <CommentWriterName>{writer_name}</CommentWriterName>
            <CommentCreatedAt>{timeSince(created_at)}</CommentCreatedAt>
          </CommentWriterInfo>
          <IconButton iconSrc={MORE_ACTION} onClickHandler={toggleMoreActions} />
          {isMoreActions && (
            <AuthorActionModal setModalState={toggleMoreActions}>
              <AuthorActionButtons
                id={commentId}
                type='COMMENT'
                isOwnContent={isMine}
                editHandler={() => {}}
                deleteHandler={() => {}}
                chatHandler={() => {}}
                reportHandler={() => {}}
              />
            </AuthorActionModal>
          )}
        </CommentWriterContainer>
        <ContentContainer>
          <CommentContent>{content}</CommentContent>
          <CommentLikeContainer>
            <CommentLikeImg src={LIKE_ICON} />
            <CommentLikeCount>{comment_like}</CommentLikeCount>
          </CommentLikeContainer>
        </ContentContainer>
      </CommentItemLayout>
    );
  },
);

CommentItem.displayName = 'CommentItem';

export default CommentItem;

const CommentItemLayout = styled.div`
  width: 100%;
  padding: 1rem 0 1rem 0;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid ${colors.gray3};
`;

const CommentWriterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const CommentWriterInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const CommentWriterImg = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  object-fit: cover;
`;

const CommentWriterName = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.black};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-top: 0.5rem;
  gap: 0.5rem;
`;

const CommentContent = styled.p`
  width: 100%;
  font-size: 14px;
  color: ${colors.black};
  line-height: 21px;
  margin-left: 3rem;
`;

const CommentCreatedAt = styled.p`
  font-size: 12px;
  color: ${colors.gray5};
  line-height: 18px;
`;

const CommentLikeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-left: 2.8rem;
`;

const CommentLikeImg = styled.img`
  width: 1.6rem;
  height: 1.6rem;
  object-fit: cover;
`;

const CommentLikeCount = styled.p`
  font-size: 12px;
  color: ${colors.primary};
  line-height: 18px;
`;
