import { TabInterface } from '@/types/post';
import React from 'react';
import styled from 'styled-components';

type Props = {
  tabList: TabInterface[];
  tabClickHandler: (tab: TabInterface) => void;
  selectedTab: TabInterface;
};
const TabByCategory = ({ tabList, tabClickHandler, selectedTab }: Props) => {
  return (
    <TabBox>
      {tabList.map((tab, index) => (
        <CategaryTitle
          key={index}
          $isSeleced={tab.id === selectedTab.id}
          onClick={() => tabClickHandler(tab)}
        >
          {tab.name}
        </CategaryTitle>
      ))}
    </TabBox>
  );
};

export default TabByCategory;
const TabBox = styled.div`
  width: 100%;
  padding: 1.8rem 2rem 0 2.6rem;
  display: flex;
  gap: 1.2rem;
`;
const CategaryTitle = styled.div<{ $isSeleced: boolean }>`
  cursor: pointer;
  font-family: SUIT;
  font-style: normal;
  line-height: 150%;
  font-size: 20px;
  font-weight: 700;
  border-bottom: ${({ $isSeleced }) => ($isSeleced ? '2px solid #000' : 'none')};
  color: ${({ $isSeleced }) => ($isSeleced ? '#252424' : '#C8C8C8')};
`;
