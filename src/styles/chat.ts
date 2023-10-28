import { colors } from '@/constants/colors';
import styled, { css } from 'styled-components';

export const ChatRoomContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  /* position: relative; */
  flex-direction: column;
  padding: 0.8rem 2rem;
  gap: 0.8rem;
  background-color: ${colors.pastel};
`;

export const ChatRoomItemLayout = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2rem 1.8rem;
  gap: 0.8rem;
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
export const defaultImageWrpperLayout = css``;
