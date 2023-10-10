import React from 'react';
import { SVGIconInterface } from '../../../types/types';
import { colors } from '../../../constants/colors';

const WarningIcon = ({ color }: SVGIconInterface) => {
  return (
    <svg width='30' height='30' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d={WARNING_ICON_URL} fill={color} />
      <path d={EXCLAMATION_MARK_ICON_URL} fill={colors.white} />
    </svg>
  );
};

export default WarningIcon;

const WARNING_ICON_URL = 'M11.6041 5L5 18H19.56L12.28 5L5';

const EXCLAMATION_MARK_ICON_URL =
  'M11.6041 12.424H12.9571V9.304H11.6041V12.424ZM11.603 15.1279H12.9561V13.7759H11.603V15.1279ZM12.28';
