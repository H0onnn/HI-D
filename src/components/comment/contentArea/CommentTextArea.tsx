import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '@/constants/colors';
import SUBMIT_ICON from '@/public/images/ui/send_icon.svg';

interface CommentTextAreaInterface {
  onAddComment: (comment: string) => Promise<void>;
}

const CommentTextArea = ({ onAddComment }: CommentTextAreaInterface) => {
  const [comment, setComment] = useState<string>('');

  const commentChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const commentSubmitHandler = async () => {
    await onAddComment(comment);
    setComment('');
  };

  return (
    <CommentTextAreaLayout>
      <CommentTextAreaWrapper>
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

const CommentTextAreaLayout = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 39rem;
  height: 7rem;
  padding: 1rem 2rem;
  background-color: ${colors.white};
  box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;

const CommentTextAreaWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 4.8rem;
  border-radius: 8px;
  background-color: ${colors.gray1};
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
