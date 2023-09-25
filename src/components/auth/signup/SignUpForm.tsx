import React from 'react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { ProfileSetupDataInterface } from '../../../types/types';

interface SignUpFormInterface {
  children: React.ReactNode;
  onSubmit: SubmitHandler<ProfileSetupDataInterface>;
}

const SignUpForm = ({ children, onSubmit }: SignUpFormInterface) => {
  const methods = useForm<ProfileSetupDataInterface>({ mode: 'onChange' });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default SignUpForm;
