import { colors } from '@/constants/colors';
import styled, { css } from 'styled-components';

export const ChatRoomContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 0.8rem 2rem;
  gap: 0.8rem;
  background-color: ${colors.pastel};
`;

export const defaultMessageTextLayout = css`
  max-width: 100%;
  word-wrap: break-word;
  padding: 10px 16px;
  gap: 10px;
  font-size: 16px;
`;
export const defaultMessageLayout = css`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
