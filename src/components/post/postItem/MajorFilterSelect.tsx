import React from 'react';
import usePostFilter from '@/hooks/usePostFilter';
import SelectLayout from './SelectLayout';
import styled from 'styled-components';

const MajorFilterSelect = () => {
  const { majorId, setMajorId, majorDataList } = usePostFilter();

  return (
    <Layout>
      <SelectLayout
        selectedId={majorId}
        setSelectedId={setMajorId}
        dataList={majorDataList}
        width='19rem'
        $darkMode
      />
    </Layout>
  );
};

export default MajorFilterSelect;

const Layout = styled.div`
  position: absolute;
  left: 2rem;
  top: 3.2rem;
`;
