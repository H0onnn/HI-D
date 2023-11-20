import React from 'react';
import usePostFilter from '@/hooks/usePostFilter';
import SelectLayout from './SelectLayout';
import styled from 'styled-components';

const PostFilterSelect = () => {
  const { selectedId, setSelectedId, dataList } = usePostFilter();

  return (
    <Layout>
      <SelectLayout
        selectedId={selectedId}
        setSelectedId={setSelectedId}
        dataList={dataList}
        width='8rem'
      />
    </Layout>
  );
};

export default PostFilterSelect;

const Layout = styled.div`
  position: absolute;
  right: 0.8rem;
  bottom: 0;
`;
