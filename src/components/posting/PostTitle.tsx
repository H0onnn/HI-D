import React from 'react';
import useFocus from '@/hooks/useFocus';
import useSetupInput from '@/hooks/useSetupInput';
import Input from '../public/Input';
import { InputWrapper } from '@/styles/styles';
import { titleValidation } from '@/utils/posting/postValidationRules';

const PostTitle = () => {
  const { register } = useSetupInput('title', titleValidation, 'default');

  const { onFocus, onBlur } = useFocus();

  return (
    <InputWrapper>
      <Input
        type='post_title'
        {...register('title', titleValidation)}
        placeholder='글 제목을 입력해주세요.'
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </InputWrapper>
  );
};

export default PostTitle;
