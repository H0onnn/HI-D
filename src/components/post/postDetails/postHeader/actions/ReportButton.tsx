import React from 'react';
import styled from 'styled-components';
import REPORT_ICON from '@/public/images/ui/report_icon.svg';

interface ReportButtonInterface {
  reportClickHandler: () => void;
}

const ReportButton = ({ reportClickHandler }: ReportButtonInterface) => {
  return (
    <ReportButtonLayout onClick={reportClickHandler}>
      <ReportButtonIcon src={REPORT_ICON} />
    </ReportButtonLayout>
  );
};

export default ReportButton;

const ReportButtonLayout = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  cursor: pointer;
  overflow: hidden;
`;

const ReportButtonIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
