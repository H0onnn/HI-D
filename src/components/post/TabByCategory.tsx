import { TabInterface } from '@/types/post';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

type Props = {
  tabList: TabInterface[];
  tabClickHandler: (tab: TabInterface) => void;
  selectedTab: TabInterface;
  location?: string;
};
const TabByCategory = ({ tabList, tabClickHandler, selectedTab, location }: Props) => {
  const navigate = useNavigate();
  return (
    <TabBox>
      {tabList.map((tab, index) => (
        <>
          <CategaryTitle
            key={index}
            $isSeleced={tab.id === selectedTab.id}
            onClick={() => tabClickHandler(tab)}
          >
            {tab.name}
          </CategaryTitle>
        </>
      ))}
      {location === 'main' && (
        <MoveButton
          onClick={() => {
            if (!selectedTab.link) return;
            navigate(selectedTab.link);
          }}
        >
          전체보기
        </MoveButton>
      )}
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
  border-bottom: 1px solid #f4f5ff;
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

const MoveButton = styled.div`
  cursor: pointer;
  position: absolute;
  bottom: 0.5rem;
  right: 2rem;
  color: #838383;
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;
