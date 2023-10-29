import React from 'react';
import useFocus from '@/hooks/useFocus';
import useSetupInput from '@/hooks/useSetupInput';
import Input from '../public/Input';
import { InputWrapper } from '@/styles/styles';
import { titleValidation } from '@/utils/posting/postValidationRules';
import { PostDetailInterface } from '@/types/post';

interface PostTitleInterface {
  initialTitle?: PostDetailInterface['title'];
}

const PostTitle = ({ initialTitle }: PostTitleInterface) => {
  const { register } = useSetupInput('title', titleValidation, 'default', initialTitle);

  const { onFocus, onBlur } = useFocus();

  return (
    <InputWrapper>
      <Input
        type='post_title'
        {...register('title', titleValidation)}
        placeholder='글 제목을 입력해주세요. (2글자 이상 20글자 미만)'
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </InputWrapper>
  );
};

export default PostTitle;
