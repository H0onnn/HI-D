import React, { useState } from 'react';
import styled from 'styled-components';
import PREV_ICON from '@/public/images/ui/prev_icon.svg';
import NEXT_ICON from '@/public/images/ui/next_icon.svg';

interface ImageSliderInterface {
  imageUrls: string[];
}

const ImageSlider = ({ imageUrls }: ImageSliderInterface) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [showSliderButton, setShowSliderButton] = useState<boolean>(false);

  const goPrevSlide = () => {
    if (currentSlide > 0) setCurrentSlide((prev) => prev - 1);
  };

  const goNextSlide = () => {
    if (currentSlide < imageUrls.length - 1) setCurrentSlide((prev) => prev + 1);
  };

  return (
    <SliderLayout
      onMouseEnter={() => setShowSliderButton(true)}
      onMouseLeave={() => setShowSliderButton(false)}
    >
      {showSliderButton && currentSlide !== 0 && (
        <SlideButton $left onClick={goPrevSlide}>
          <SlideButtonIcon src={PREV_ICON} alt='prev_icon' />
        </SlideButton>
      )}
      {showSliderButton && currentSlide !== imageUrls.length - 1 && (
        <SlideButton $right onClick={goNextSlide}>
          <SlideButtonIcon src={NEXT_ICON} alt='next_icon' />
        </SlideButton>
      )}
      <SliderContent $currentSlide={currentSlide}>
        {imageUrls?.map((url, index) => (
          <SliderImage key={index} src={url} alt={`post_image_${index}`} />
        ))}
      </SliderContent>
    </SliderLayout>
  );
};

const SliderLayout = styled.div`
  width: 100%;
  max-height: 35rem;
  position: relative;
  overflow: hidden;
  border-radius: 12px;
`;

const SlideButton = styled.button<{ $left?: boolean; $right?: boolean }>`
  width: 2.4rem;
  height: 2.4rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 1;

  ${(props) => props.$left && 'left: 1rem;'}
  ${(props) => props.$right && 'right: 1rem;'}
`;

const SlideButtonIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SliderContent = styled.div<{ $currentSlide: number }>`
  display: flex;
  width: 100%;
  height: 100%;
  transform: ${(props) => `translateX(-${props.$currentSlide * 100}%)`};
  transition: transform 0.5s;
`;

const SliderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  flex-shrink: 0;
`;

export default ImageSlider;
