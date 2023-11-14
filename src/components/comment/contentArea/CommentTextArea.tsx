import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { colors } from '@/constants/colors';
import SUBMIT_ICON from '@/public/images/ui/send_icon.svg';

interface CommentTextAreaInterface {
  $isEditing?: boolean;
  content?: string;
  replyId?: number;
  onAddComment?: (commentContent: string) => void;
  onEditComment?: ({ replyId, content }: { replyId: number; content: string }) => void;
  onEditCancel?: () => void;
}

const CommentTextArea = ({
  $isEditing,
  content,
  replyId,
  onAddComment,
  onEditComment,
  onEditCancel,
}: CommentTextAreaInterface) => {
  const [comment, setComment] = useState<string>('');

  const commentChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const commentSubmitHandler = () => {
    if ($isEditing && onEditComment && replyId) {
      onEditComment({ replyId, content: comment });
    } else if (!$isEditing && onAddComment) {
      onAddComment(comment);
    }
    onEditCancel && onEditCancel();
    setComment('');
  };

  useEffect(() => {
    $isEditing && content && setComment(content);
  }, [content, $isEditing]);

  return (
    <CommentTextAreaLayout $isEditing={$isEditing}>
      <CommentTextAreaWrapper $isEditing={$isEditing}>
        <CommentTextAreaInput
          placeholder='댓글을 입력해주세요.'
          value={comment}
          maxLength={500}
          onChange={commentChangeHandler}
        />
        <CommentSubmitButton>
          <ButtonIcon
            src={SUBMIT_ICON}
            alt='comment_submit_button'
            onClick={commentSubmitHandler}
          />
        </CommentSubmitButton>
      </CommentTextAreaWrapper>
    </CommentTextAreaLayout>
  );
};

export default CommentTextArea;

const CommentTextAreaLayout = styled.div<{ $isEditing?: boolean }>`
  ${({ $isEditing }) =>
    $isEditing
      ? `
        position: relative;
        margin: 0.5rem 0;
        border-radius: 8px;
      `
      : `
        position: fixed;
        bottom: 0;
        box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.1);
        z-index: 1;
        background-color: ${colors.white};
      `}
  width: 100%;
  max-width: 39rem;
  height: 7rem;
  padding: 1rem 2rem;
`;

const CommentTextAreaWrapper = styled.div<{ $isEditing?: boolean }>`
  ${({ $isEditing }) =>
    $isEditing
      ? `
        border: 1px solid ${colors.gray3};
        background-color: ${colors.gray2};
      `
      : `
        background-color: ${colors.gray1};
      `}
  position: relative;
  width: 100%;
  height: 4.8rem;
  border-radius: 8px;
`;

const CommentTextAreaInput = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 1.2rem 1.6rem 1.2rem 1.6rem;
  border: 1px solid transparent;
  border-radius: 8px;
  outline: none;
  resize: none;
  font-size: 14px;
  font-family: 'SUIT';
  line-height: 21px;
  background-color: transparent;
  color: ${colors.black};

  &::placeholder {
    color: ${colors.gray5};
    padding: 0.2rem;
  }

  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  &:focus {
    border-color: ${colors.primary};
  }
`;

const CommentSubmitButton = styled.div`
  position: absolute;
  right: 1.6rem;
  bottom: 1.2rem;
  width: 2.4rem;
  height: 2.4rem;
  border-radius: 8px;
  overflow: hidden;
`;

const ButtonIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
