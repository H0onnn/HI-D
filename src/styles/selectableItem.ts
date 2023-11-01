import styled, { css } from 'styled-components';
import { colors } from '@/constants/colors';

interface CommonItemWrapperProps {
  $isSelected?: boolean;
  $isEdit?: boolean;
  $first?: boolean;
  $last?: boolean;
}

export const CommonItemWrapper = styled.div<CommonItemWrapperProps>`
  width: 100%;
  height: 4.8rem;
  border: 1px solid ${colors.gray2};
  border-radius: 8px;
  font-size: 14px;
  color: ${colors.gray5};
  line-height: 21px;
  display: flex;
  align-items: center;
  padding: 1rem 1.6rem;

  &:hover {
    border-color: ${colors.third};
    background-color: ${colors.pastel};
    color: ${colors.primary};
  }

  ${({ $isSelected }) =>
    $isSelected &&
    css`
      border-color: ${colors.third};
      background-color: ${colors.pastel};
      color: ${colors.primary};
    `}

  ${({ $isEdit, $first, $last }) =>
    $isEdit &&
    css`
      width: 20rem;
      border: 0.5px solid ${colors.gray2};
      border-radius: 0;

      ${$first &&
      css`
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
      `}

      ${$last &&
      css`
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
      `}
    `}
`;

export const CommonListLayout = styled.div<{ $isEdit?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1rem;

  ${({ $isEdit }) =>
    $isEdit &&
    css`
      gap: 0;
    `}
`;
