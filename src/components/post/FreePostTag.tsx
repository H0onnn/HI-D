import React from 'react';
import styled from 'styled-components';
import { FreePostTag, FreePostTags } from '../../types/post';

type Props = {
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  currentTag: FreePostTag;
};
const FreePostTagContainer = ({ onClick, currentTag }: Props) => {
  return (
    <Layout>
      {Object.keys(FreePostTags).map(
        (tag, idx) =>
          isNaN(Number(tag)) && (
            <TagBox key={idx} onClick={onClick} $active={currentTag === tag}>
              {tag}
            </TagBox>
          ),
      )}
    </Layout>
  );
};

export default FreePostTagContainer;

const Layout = styled.div`
  display: flex;
  gap: 0.8rem;
  padding: 0.8rem 0;
  overflow: scroll;
  overflow-y: hidden;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const TagBox = styled.div<{ $active: boolean }>`
  height: 3.6rem;
  padding: 0.6rem 1.4rem;
  border-radius: 90rem;
  white-space: nowrap;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  color: ${({ $active }) => ($active ? '#fff' : 'var(--2, #A5ADFF)')};
  border: 1px solid ${({ $active }) => ($active ? 'var(--1, #5061ff)' : 'var(--2, #a5adff)')};
  background: ${({ $active }) => ($active ? 'var(--1, #5061ff)' : ' var(--, #fff)')};
  &:first-child {
    margin: 0 0 0 2rem;
  }
  &:last-child {
    margin: 0 2rem 0 0;
  }
`;
