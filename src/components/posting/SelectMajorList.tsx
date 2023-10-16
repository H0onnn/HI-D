import React, { useState } from 'react';
import styled from 'styled-components';
import SelectMajorItem from './SelectMajorItem';

interface SelectMajorListInterface {
  onMajorSelect: (major: string) => void;
}

const SelectMajorList = ({ onMajorSelect }: SelectMajorListInterface) => {
  const [selectedMajor, setSelectedMajor] = useState<string | null>(null);

  const itemClickHandler = (major: string) => {
    onMajorSelect(major);
    setSelectedMajor(major);
  };

  return (
    <MajorListLayout>
      {MAJORS.map((major) => (
        <SelectMajorItem
          key={major}
          major={major}
          onClick={itemClickHandler}
          selectedMajor={selectedMajor}
        />
      ))}
    </MajorListLayout>
  );
};

export default SelectMajorList;

const MAJORS = [
  '인문, 경영, 사회 계열',
  '자연, 컴퓨터, 공학 계열',
  '교대, 사범대, 교육 계열',
  '음악, 미술, 체육 예체능 계열',
  '간호, 의약, 의학 계열',
  '기타',
];

const MajorListLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1rem;
`;
