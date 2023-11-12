import React, { useState } from 'react';
import styled from 'styled-components';
import { colors } from '@/constants/colors';
import PageHeader from '@/components/public/PageHeader';
import Input from '@/components/public/Input';
import MainComment from '@/components/public/MainComment';
import { PageLayout } from '@/styles/styles';
import CS_ICON from '@/public/images/ui/cs_page.svg';
import toast from 'react-hot-toast';

const CSPage = () => {
  // eslint-disable-next-line
  const [email, setEmail] = useState<string>('hidcs@gmail.com');

  const copyEmailHandler = () => {
    navigator.clipboard.writeText(email);
    toast.success('메일이 복사되었어요.', { id: 'copyEmailSuccess' });
  };

  return (
    <>
      <PageHeader title='고객센터' isGoBack />
      <PageLayout style={{ gap: '2rem' }}>
        <MainComment style={{ fontSize: '20px', marginBottom: '0' }} comment='메일로 문의' />
        <Text>
          문의 사항을 아래 메일로 보내주시면 빠른 시일 내로 답변 드리도록 하겠습니다. (영업일 기준
          1-3일 이내)
        </Text>
        <Input
          type='email'
          value={email}
          disabled={true}
          status='success'
          button
          buttonText='복사'
          onButtonClick={copyEmailHandler}
          style={{ color: colors.gray5 }}
          buttonStyle={{ width: '4.5rem' }}
        />
        <IconWrapper>
          <CSIcon src={CS_ICON} alt='cs_icon' />
        </IconWrapper>
      </PageLayout>
    </>
  );
};

export default CSPage;

const Text = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: ${colors.gray7};
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15rem;
  height: 23rem;
  margin: 0 auto;
`;

const CSIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
