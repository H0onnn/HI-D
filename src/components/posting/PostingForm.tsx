import React from 'react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { PostingDataInterface } from '@/types/posting';

interface SignUpFormInterface {
  children: React.ReactNode;
  onSubmit: SubmitHandler<PostingDataInterface>;
}

const PostingForm = ({ children, onSubmit }: SignUpFormInterface) => {
  const methods = useForm<PostingDataInterface>({ mode: 'onChange' });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default PostingForm;
