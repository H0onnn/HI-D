import styled from 'styled-components';
import { colors } from '@/constants/colors';

export const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.black};
  line-height: 27px;
  padding-bottom: 1.6rem;
`;
