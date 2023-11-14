import DeclareList from '@/components/admin/declare/DeclareList';
import MainPageHeader from '@/components/main/MainPageHeader';
import { declareTab } from '@/constants/admin';
import { colors } from '@/constants/colors';
import { AdminPageLayout } from '@/styles/admin';
import { DeclareTabInterface } from '@/types/admin';
import React, { useState } from 'react';
import styled from 'styled-components';

const DeclarePage = () => {
  const [tab, setTab] = useState<DeclareTabInterface>(declareTab[0]);

  return (
    <>
      <MainPageHeader />
      <AdminPageLayout>
        <TabLayout>
          <Button onClick={() => setTab(declareTab[0])} $active={tab.id === 0}>
            글 관리
          </Button>
          <Button onClick={() => setTab(declareTab[1])} $active={tab.id === 1}>
            댓글 관리
          </Button>
        </TabLayout>
        <DeclareList tab={tab} />
      </AdminPageLayout>
    </>
  );
};

export default DeclarePage;

const TabLayout = styled.div`
  height: 4.8rem;
  padding: 0.4rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 0.4rem;
  border-radius: 1.2rem;
  background: ${colors.pastel};
`;

const Button = styled.button<{ $active?: boolean }>`
  width: 100%;
  height: 100%;
  border-radius: 0.8rem;
  border: none;
  color: ${({ $active }) => ($active ? colors.white : colors.third)};
  background: ${({ $active }) => ($active ? colors.primary : colors.pastel)};
  font-size: 16px;
  font-weight: bold;
`;
