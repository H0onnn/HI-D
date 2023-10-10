import React from 'react';
import styled from 'styled-components';
import { FreePostTag, FreePostTags } from '../../types/post';
import { colors } from '@/constants/colors';

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
  cursor: pointer;
  display: flex;
  gap: 0.8rem;
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
  color: ${({ $active }) => ($active ? colors.white : '#A5ADFF')};
  border: 0.1rem solid ${({ $active }) => ($active ? ' #5061ff' : '#a5adff')};
  background-color: ${({ $active }) => ($active ? ' #5061ff' : colors.white)};
  &:first-child {
    margin: 0 0 0 2rem;
  }
  &:last-child {
    margin: 0 2rem 0 0;
  }
  &:hover {
    box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.1);
    scale: 1.01;
  }
  &:active {
    color: ${colors.white};
    font-weight: 500;
    border: 0.08rem solid #5061ff;
    background: #5061ff;
    box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.1);
    scale: 1.01;
  }
`;
