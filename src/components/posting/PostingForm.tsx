import React from 'react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { PostingDataInterface } from '@/types/posting';
import { PostDetailInterface } from '@/types/post';

interface SignUpFormInterface {
  children: React.ReactNode;
  onSubmit: SubmitHandler<PostingDataInterface>;
  postToEdit?: PostDetailInterface;
}

const PostingForm = ({ children, onSubmit, postToEdit }: SignUpFormInterface) => {
  const methods = useForm<PostingDataInterface>({
    mode: 'onChange',
    shouldUnregister: false,
    defaultValues: { boardType: postToEdit ? postToEdit.boardType : undefined },
  });

  console.log(postToEdit?.boardType);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default PostingForm;
