import useObserver from '@/hooks/useObserver';
import React, { useEffect, useState } from 'react';
import { AccountInterface, PageStatusInterface } from '@/types/admin';
import styled from 'styled-components';
import AccountItem from './AccountItem';
// import { getAccountList } from '@/services/admin';
// import LoadingContent from '@/components/public/LoadingContent';
// import ErrorContent from '@/components/public/ErrorContent';

const AccountList = ({ keyword }: { keyword: string }) => {
  const infinityRef = useObserver(() => nextPageHandler());
  const [dataList, setDataList] = useState<AccountInterface[]>([]);
  const [{ page, hasNext }, setPage] = useState<PageStatusInterface>({ page: 1, hasNext: true });
  //   const [loading, setLoading] = useState<boolean>(false);
  //   const [error, setError] = useState<boolean>(false);

  const nextPageHandler = () => {
    if (!hasNext || page === 0) return;
    setPage((prev) => ({ ...prev, page: prev.page + 1 }));
  };

  const fetchData = async () => {
    if (!hasNext || page === 0) return;
    // setLoading(true);
    // const response = await getAccountList({ page, keyword });0
    // if (response) {
    //   setDataList((prev) => [...prev, ...response.dataList]);
    await setDataList([]);
    //   setPage((prev) => ({ ...prev, hasNext: response.hasNext }));
    // } else {
    //   setPage({ page: 0, hasNext: false });
    //   //   setError(true);
    // }
    // // setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [page, keyword]);

  return (
    <ListWrpper>
      {/* {loading && <LoadingContent />} */}
      {/* {!loading && error && <ErrorContent />} */}
      {dataList.map((data) => (
        <AccountItem key={data.memberId} {...data} />
      ))}
      <div ref={infinityRef} style={{ height: '1px' }}></div>
    </ListWrpper>
  );
};

export default AccountList;

const ListWrpper = styled.div`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`;
