import React from 'react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { PostingDataInterface } from '@/types/posting';

interface PostingFormInterface {
  children: React.ReactNode;
  onSubmit: SubmitHandler<PostingDataInterface>;
}

const PostingForm = ({ children, onSubmit }: PostingFormInterface) => {
  const methods = useForm<PostingDataInterface>({
    mode: 'onSubmit',
    shouldUnregister: false,
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default PostingForm;
