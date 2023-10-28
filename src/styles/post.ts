import { colors } from '@/constants/colors';
import styled, { css } from 'styled-components';

const textOverflowStyles = css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Layout = styled.div`
  cursor: pointer;
  width: 100%;
  padding: 1.2rem 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  border-radius: 0.8rem;
  background: ${colors.white};
  &:hover {
    box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.1);
    scale: 1.01;
  }
  &:active {
    box-shadow: 0 0 0.8rem rgba(0, 0, 0, 0.1);
    scale: 1.01;
  }
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${colors.gray2};
  padding: 0.6rem 0;
`;
export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Title = styled.div`
  ${textOverflowStyles}
  font-size: 16px;
  font-weight: 700;
`;
export const TimeBox = styled.div`
  ${textOverflowStyles}
  color: ${colors.gray6};
  font-size: 14px;
  font-weight: 400;
`;
export const Contents = styled.div`
  min-height: 4.4rem;
  color: ${colors.gray6};
  font-size: 14px;
  font-weight: 400;
`;
export const MajorBox = styled.div`
  color: ${colors.gray6};
  font-size: 14px;
  font-weight: 400;
`;
export const EditButton = styled.button`
  // Edit 버튼 스타일
`;

export const PostListWrapper = styled.div`
  padding: 1.6rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  height: 100%;
`;
export const PostListLayout = styled.div`
  height: 100%;
  background-color: ${colors.pastel};
`;
export const TagWrapper = styled.div`
  padding: 3.2rem 0 0 0;
`;
