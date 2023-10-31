import React from 'react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { ReportDataInterface } from '@/types/report';

interface ReportFormInterface {
  children: React.ReactNode;
  onSubmit: SubmitHandler<ReportDataInterface>;
}

const ReportForm = ({ children, onSubmit }: ReportFormInterface) => {
  const methods = useForm<ReportDataInterface>({
    mode: 'onSubmit',
    shouldUnregister: false,
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default ReportForm;
