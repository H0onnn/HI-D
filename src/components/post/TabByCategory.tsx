import { colors } from '@/constants/colors';
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
        <div key={index}>
          <CategaryTitle
            $isSeleced={tab.id === selectedTab.id}
            onClick={() => tabClickHandler(tab)}
          >
            {tab.name}
          </CategaryTitle>
        </div>
      ))}
    </TabBox>
  );
};

export default TabByCategory;

const TabBox = styled.div`
  width: 100%;
  padding: 1.8rem 2rem 0 2.6rem;
  display: flex;
  position: relative;
  gap: 1.2rem;
  border-bottom: 1px solid ${colors.gray1};
`;
const CategaryTitle = styled.div<{ $isSeleced: boolean }>`
  cursor: pointer;
  font-family: SUIT;
  font-style: normal;
  line-height: 150%;
  font-size: 20px;
  font-weight: 700;
  border-bottom: ${({ $isSeleced }) => ($isSeleced ? `2px solid ${colors.black}` : 'none')};
  color: ${({ $isSeleced }) => ($isSeleced ? `${colors.black}` : `${colors.gray4}`)};
`;
