import React from 'react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { PostingDataInterface } from '@/types/posting';
import { PostDetailInterface } from '@/types/post';

interface PostingFormInterface {
  children: React.ReactNode;
  onSubmit: SubmitHandler<PostingDataInterface>;
  postToEdit?: PostDetailInterface;
}

const PostingForm = ({ children, onSubmit, postToEdit }: PostingFormInterface) => {
  const methods = useForm<PostingDataInterface>({
    mode: 'onChange',
    shouldUnregister: false,
    defaultValues: { boardType: postToEdit ? postToEdit.boardType : undefined },
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default PostingForm;
