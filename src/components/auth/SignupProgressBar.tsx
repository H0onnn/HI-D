import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/colors';

interface SignupProgressBarInterface {
  progress: number;
}

const SignupProgressBar = ({ progress }: SignupProgressBarInterface) => {
  return (
    <ProgressBarContainer>
      <StyledProgressBar progress={progress} />
    </ProgressBarContainer>
  );
};

export default SignupProgressBar;

const ProgressBarContainer = styled.div`
  position: relative;
  width: 100%;
  height: 0.3rem;
  bottom: 2rem;
`;

const StyledProgressBar = styled.div<SignupProgressBarInterface>`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: ${colors.lineGray};
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  &::after {
    content: '';
    display: block;
    border-radius: 10px;
    width: ${({ progress }) => `${progress}%`};
    transition: width 1s ease-out;
    height: 100%;
    background: linear-gradient(90deg, #596bff 0%, #5061ff 100%);
    animation: ProgressBarfillAnimation 1s ease-out;
  }

  @keyframes ProgressBarfillAnimation {
    from {
      width: 0;
    }
    to {
      width: ${({ progress }) => `${progress}%`};
    }
  }
`;
