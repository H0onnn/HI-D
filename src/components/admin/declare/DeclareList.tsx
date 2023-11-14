import useObserver from '@/hooks/useObserver';
import React from 'react';
import DeclareItem from './DeclareItem';
import { DeclareTabInterface } from '@/types/admin';
import styled from 'styled-components';
import LoadingContent from '@/components/public/LoadingContent';
import useDeclares from '@/hooks/useDeclares';
import ErrorContent from '@/components/public/ErrorContent';

const DeclareList = ({ tab }: { tab: DeclareTabInterface }) => {
  const { data, moreDataHandler, isFetching } = useDeclares({ category: tab.code });
  const loadMoreRef = useObserver(() => moreDataHandler());

  if (!data || data.pages[0].dataList.length === 0) {
    return <ErrorContent />;
  }

  return (
    <ListWrapper>
      {data?.pages.map((page) =>
        page.dataList.map((data) => <DeclareItem key={data.postId} {...data} {...tab} />),
      )}
      {isFetching ? <LoadingContent /> : <div ref={loadMoreRef} style={{ height: '1px' }}></div>}
    </ListWrapper>
  );
};

export default DeclareList;

const ListWrapper = styled.div`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`;
