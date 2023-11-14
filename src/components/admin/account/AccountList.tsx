import React from 'react';
import styled from 'styled-components';
import AccountItem from './AccountItem';
import useAccountList from '@/hooks/useAccountList';
import ErrorContent from '@/components/public/ErrorContent';
// import LoadingContent from '@/components/public/LoadingContent';

const AccountList = ({ keyword }: { keyword: string }) => {
  const { data, infinityRef } = useAccountList({ keyword });

  if (!data || data.pages[0].dataList.length === 0) {
    return <ErrorContent />;
  }

  return (
    <ListWrapper>
      {/* {loading && <LoadingContent />} */}
      {data?.pages.map((page, pageIndex, pageArray) =>
        page.dataList.map((data, dataIndex, dataArray) => {
          const isLastData =
            pageIndex === pageArray.length - 1 && dataIndex === dataArray.length - 1;
          return (
            <AccountItem key={data.memberId} ref={isLastData ? infinityRef : null} {...data} />
          );
        }),
      )}
      {/* <div ref={infinityRef} style={{ height: '1px' }}></div> */}
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
