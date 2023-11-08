import React from 'react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { DeleteUserInterface } from '@/types/user';

interface DeleteFormInterface {
  children: React.ReactNode;
  onSubmit: SubmitHandler<DeleteUserInterface>;
}

const DeleteAccountForm = ({ children, onSubmit }: DeleteFormInterface) => {
  const methods = useForm<DeleteUserInterface>({
    mode: 'onChange',
    shouldUnregister: false,
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default DeleteAccountForm;
