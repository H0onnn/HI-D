import useObserver from '@/hooks/useObserver';
import React, { useEffect, useState } from 'react';
import DecalreItem from './DeclareItem';
import { DeclareTabInterface, PageStatusInterface, ReportInterface } from '@/types/admin';
import { getReportList } from '@/services/admin';
import styled from 'styled-components';
import LoadingContent from '@/components/public/LoadingContent';
import ErrorContent from '@/components/public/ErrorContent';

const DeclareList = ({ tab }: { tab: DeclareTabInterface }) => {
  const infinityRef = useObserver(() => nextPageHandler());
  const [dataList, setDataList] = useState<ReportInterface[]>([]);
  const [{ page, hasNext }, setPage] = useState<PageStatusInterface>({ page: 1, hasNext: true });
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const nextPageHandler = () => {
    if (!hasNext || loading || page === 0) return;
    setPage((prev) => ({ ...prev, page: prev.page + 1 }));
  };

  const fetchData = async () => {
    if (!hasNext || loading || page === 0) return;
    setLoading(true);
    const response = await getReportList({ page, category: tab.code });
    if (response) {
      setDataList((prev) => [...prev, ...response.dataList]);
      setPage((prev) => ({ ...prev, hasNext: response.hasNext }));
    } else {
      setPage({ page: 0, hasNext: false });
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <ListWrpper>
      {loading && <LoadingContent />}
      {!loading && error && <ErrorContent />}
      {dataList.map((data) => (
        <DecalreItem key={data.postId} {...data} {...tab} />
      ))}
      <div ref={infinityRef} style={{ height: '1px' }}></div>
    </ListWrpper>
  );
};

export default DeclareList;

const ListWrpper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`;
