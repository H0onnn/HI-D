import React, { useEffect } from 'react';
import styled from 'styled-components';
import AccountItem from './AccountItem';
import useAccounts from '@/hooks/useAccounts';
import ErrorContent from '@/components/public/ErrorContent';
import LoadingContent from '@/components/public/LoadingContent';
import useObserver from '@/hooks/useObserver';
import useModalStore from '@/store/modalStore';

const AccountList = ({ keyword }: { keyword: string }) => {
  const { data, moreDataHandler, isFetching, refetch } = useAccounts({ keyword });
  const { modalOpen } = useModalStore();
  const loadMoreRef = useObserver(() => moreDataHandler());

  useEffect(() => {
    if (modalOpen) return;
    refetch();
  }, [modalOpen]);

  if (!data || data.pages[0].dataList.length === 0) {
    return <ErrorContent />;
  }

  return (
    <ListWrapper>
      {data?.pages.map((page) =>
        page.dataList.map((data) => <AccountItem key={data.memberId} {...data} />),
      )}
      {isFetching ? <LoadingContent /> : <div ref={loadMoreRef} style={{ height: '1px' }}></div>}
    </ListWrapper>
  );
};

export default AccountList;

const ListWrapper = styled.div`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`;
