import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '@/constants/colors';
import SUBMIT_ICON from '@/public/images/ui/send_icon.svg';
import { httpClient } from '@/api/httpClient';
import toast from 'react-hot-toast';
import { CommentDataInterface } from '@/types/comment';

interface CommentTextAreaInterface {
  postId: number;
  onNewComment: (newComment: CommentDataInterface) => void;
}

const CommentTextArea = ({ postId, onNewComment }: CommentTextAreaInterface) => {
  const [comment, setComment] = useState<string>('');

  const commentChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const commentSubmitHandler = async () => {
    try {
      const newComment = await httpClient.comment.post.replies(postId, comment);
      onNewComment(newComment);
      setComment('');
      toast.success('댓글이 등록되었습니다.', { id: 'commentSubmitSuccess' });
    } catch (err: unknown) {
      console.log('댓글 작성 에러 : ', err);
      toast.error('댓글 등록에 실패하였습니다.', { id: 'commentSubmitError' });
    }
  };

  return (
    <CommentTextAreaLayout>
      <CommentTextAreaInput
        placeholder='댓글을 입력해주세요.'
        value={comment}
        maxLength={500}
        onChange={commentChangeHandler}
      />
      <CommentSubmitButton>
        <ButtonIcon src={SUBMIT_ICON} alt='comment_submit_button' onClick={commentSubmitHandler} />
      </CommentSubmitButton>
    </CommentTextAreaLayout>
  );
};

export default CommentTextArea;

const CommentTextAreaLayout = styled.div`
  position: relative;
  width: 100%;
  height: 4.8rem;
  border-radius: 8px;
  padding: 1.2rem 1.6rem 1.2rem 1.6rem;
  background-color: ${colors.gray1};

  &:focus {
    border-color: ${colors.primary};
  }
`;

const CommentTextAreaInput = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
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
