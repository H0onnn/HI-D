import styled, { css, keyframes } from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  bottom: 7rem;
  left: 0;
  padding: 0 2rem;
`;

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 2rem;
  padding-top: 7rem;
`;

export const MainPageLayout = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 4.3rem);
  max-height: calc(100% - 4.3rem);
  margin-top: 4.8rem;
  overflow: hidden;
`;

export const SearchInputWrapper = styled.div`
  width: 100%;
  padding: 1.2rem 2rem;
`;

export const LogoBox = styled.div`
  width: 13.2rem;
  height: 7.7rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const SetupPageLayout = styled.div`
  width: 100%;
  max-width: 39rem;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const fadeIn = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;
export const slideUp = keyframes`
from {
  transform: translateY(100%);
}
to {
  transform: translateY(0);
}
`;

export const imageStyle = css`
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const scrollNone = css`
  -ms-overflow-style: none;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;
