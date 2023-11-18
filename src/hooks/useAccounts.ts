import { useInfiniteQuery, InfiniteData, InfiniteQueryObserverResult } from '@tanstack/react-query';
import { getAccountList } from '@/services/admin';
import { AccountListInterface } from '@/types/admin';

interface AccountsQueryResponse extends AccountListInterface {
  nextPage: number | null;
}

interface UseAccountsQueryReturnType {
  data: InfiniteData<AccountsQueryResponse> | undefined;
  moreDataHandler: () =>
    | Promise<InfiniteQueryObserverResult<InfiniteData<AccountsQueryResponse, unknown>, Error>>
    | undefined;
  isFetching: boolean;
}

const useAccounts = ({ keyword = '' }): UseAccountsQueryReturnType => {
  const fetchAccounts = async (pageParam = 1) => {
    const response = await getAccountList({
      keyword,
      page: pageParam,
    });

    return {
      ...response,
      nextPage: response.hasNext ? pageParam + 1 : null,
    };
  };

  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery<AccountsQueryResponse>({
    queryKey: [QUERY_KEY_ACCOUNT, keyword],
    queryFn: ({ pageParam }) => fetchAccounts(pageParam as number),
    getNextPageParam: (lastPage) => lastPage.nextPage,
    initialPageParam: 1,
    staleTime: STALE_TIME_DEFAULT,
  });

  const moreDataHandler = () => {
    if (hasNextPage) {
      return fetchNextPage();
    }
  };

  return { data, moreDataHandler, isFetching };
};

export const QUERY_KEY_ACCOUNT = 'accountList';
export const STALE_TIME_DEFAULT = 1000 * 60 * 5;

export default useAccounts;
