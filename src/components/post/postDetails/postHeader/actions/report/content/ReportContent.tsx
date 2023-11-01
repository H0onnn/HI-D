import React from 'react';
import styled from 'styled-components';
import { colors } from '@/constants/colors';
import useSetupInput from '@/hooks/useSetupInput';
import { Title, Layout } from '@/styles/reportForm';
import { reportContentValidation } from '@/utils/posting/postValidationRules';

const ReportContent = () => {
  const { register } = useSetupInput('content', reportContentValidation);

  return (
    <Layout>
      <Title>상세 내용</Title>
      <ReportContentInput
        {...register('content')}
        placeholder='상세 신고 내용을 입력해주세요'
        maxLength={reportContentValidation.maxLength.value}
      />
    </Layout>
  );
};

export default ReportContent;

const ReportContentInput = styled.textarea`
  width: 100%;
  height: 19rem;
  padding: 1rem 1.6rem 1rem 1.6rem;
  background-color: ${colors.white};
  border: 1px solid ${colors.gray2};
  border-radius: 8px;
  resize: none;
  font-size: 14px;
  font-family: 'SUIT';
  outline: none;
  color: ${colors.black};

  &::placeholder {
    color: ${colors.gray5};
    padding: 0.2rem;
  }

  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  &:focus {
    border-color: ${colors.primary};
  }
`;
