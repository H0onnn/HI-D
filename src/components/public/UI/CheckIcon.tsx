import React from 'react';
import { SVGIconInterface } from '../../../types/types';

const CheckIcon = ({ color }: SVGIconInterface) => {
  return (
    <svg width='100' height='50' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d={CHECK_ICON_URL} fill={color} />
    </svg>
  );
};

export default CheckIcon;

const CHECK_ICON_URL =
  'M21 6.99984L9 18.9998L3.5 13.4998L4.91 12.0898L9 16.1698L19.59 5.58984L21 6.99984Z';
