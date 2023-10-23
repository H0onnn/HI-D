import React from 'react';
import styled from 'styled-components';

interface IconButtonProps {
  iconSrc: string; // 아이콘의 이미지 경로
  isActive?: boolean; // 활성화 여부
  activeIconSrc?: string; // 활성화 상태일 때의 아이콘 이미지 경로
  onClickHandler: () => void; // 클릭 핸들러 함수
  alt?: string; // 이미지 alt
}

const IconButton = ({
  iconSrc,
  isActive = false,
  activeIconSrc,
  onClickHandler,
  alt = '',
}: IconButtonProps) => {
  const iconToDisplay = isActive && activeIconSrc ? activeIconSrc : iconSrc;

  return (
    <IconButtonLayout onClick={onClickHandler}>
      <IconImage src={iconToDisplay} alt={alt} />
    </IconButtonLayout>
  );
};

export default IconButton;

const IconButtonLayout = styled.div`
  width: 2.8rem;
  height: 2.8rem;
  cursor: pointer;
  overflow: hidden;
`;

const IconImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
