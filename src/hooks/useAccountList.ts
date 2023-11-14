import { useInfiniteQuery, InfiniteData } from '@tanstack/react-query';
import useObserver from './useObserver';
import { getAccountList } from '@/services/admin';
import { AccountListInterface } from '@/types/admin';

interface AccountListQueryResponse extends AccountListInterface {
  nextPage: number | null;
}

interface UseAccountListQueryReturnType {
  data: InfiniteData<AccountListQueryResponse> | undefined;
  infinityRef: React.RefObject<HTMLDivElement>;
  // moreDataHandler: () =>
  //   | Promise<InfiniteQueryObserverResult<InfiniteData<AccountListQueryResponse, unknown>, Error>>
  //   | undefined;
}

const useAccountList = ({ keyword = '' }): UseAccountListQueryReturnType => {
  const fetchAccountList = async (pageParam = 1) => {
    const response = await getAccountList({
      keyword,
      page: pageParam,
    });

    return {
      ...response,
      nextPage: response.hasNext ? pageParam + 1 : null,
    };
  };

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery<AccountListQueryResponse>({
    queryKey: ['accountList', keyword],
    queryFn: ({ pageParam }) => fetchAccountList(pageParam as number),
    getNextPageParam: (lastPage) => lastPage.nextPage,
    initialPageParam: 1,
  });

  const moreDataHandler = () => {
    if (hasNextPage) {
      return fetchNextPage();
    }
  };
  const infinityRef = useObserver(() => moreDataHandler());

  return { data, infinityRef };
};

export default useAccountList;
