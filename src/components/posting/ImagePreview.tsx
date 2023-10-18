import React from 'react';
import styled from 'styled-components';
import { colors } from '@/constants/colors';

interface ImagePreviewInterface {
  src: string;
  alt: string;
}

const ImagePreview = ({ src, alt }: ImagePreviewInterface) => {
  return <PreviewImages src={src} alt={alt} />;
};

export default ImagePreview;

const PreviewImages = styled.img`
  width: 11rem;
  height: 11rem;
  object-fit: cover;
  border-radius: 8px;
  border: 2px solid ${colors.gray2};
`;
