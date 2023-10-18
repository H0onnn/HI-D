import React from 'react';
import styled from 'styled-components';
import { FreePostTag, FreePostTags } from '../../types/post';
import { colors } from '@/constants/colors';

type Props = {
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  currentTag: FreePostTag;
  $wrap?: boolean;
  $noneMarginStyles?: boolean;
};
const FreePostTagContainer = ({ onClick, currentTag, $wrap, $noneMarginStyles }: Props) => {
  return (
    <Layout $wrap={$wrap}>
      {Object.keys(FreePostTags).map(
        (tag, idx) =>
          isNaN(Number(tag)) && (
            <TagBox
              key={idx}
              onClick={onClick}
              $active={currentTag === tag}
              $noneMarginStyles={$noneMarginStyles}
            >
              {tag}
            </TagBox>
          ),
      )}
    </Layout>
  );
};

export default FreePostTagContainer;

const Layout = styled.div<{ $wrap?: boolean }>`
  cursor: pointer;
  display: flex;
  gap: 0.8rem;
  overflow: scroll;
  overflow-y: hidden;
  scrollbar-width: none;
  flex-wrap: ${({ $wrap }) => ($wrap ? 'wrap' : 'nowrap')};
  &::-webkit-scrollbar {
    display: none;
  }
`;

const TagBox = styled.div<{ $active: boolean; $noneMarginStyles?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3.6rem;
  padding: 0.6rem 1.4rem;
  border-radius: 90rem;
  white-space: nowrap;
  font-family: SUIT;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  color: ${({ $active }) => ($active ? colors.white : colors.secondary)};
  border: 0.1rem solid ${({ $active }) => ($active ? colors.primary : colors.secondary)};
  background-color: ${({ $active }) => ($active ? colors.primary : colors.white)};

  &:first-child {
    margin: ${({ $noneMarginStyles }) => ($noneMarginStyles ? '0' : '0 0 0 2rem')};
  }
  &:last-child {
    margin: ${({ $noneMarginStyles }) => ($noneMarginStyles ? '0' : '0 2rem 0 0')};
  }
  &:hover {
    box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.1);
    scale: 1.01;
  }
  &:active {
    color: ${colors.white};
    font-weight: 500;
    border: 0.08rem solid ${colors.primary};
    background: #5061ff;
    box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.1);
    scale: 1.01;
  }
`;
