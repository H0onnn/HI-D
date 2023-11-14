import { ReportListInterface } from '@/types/admin';
import { getReportList } from '@/services/admin';
import { useInfiniteQuery, InfiniteData, InfiniteQueryObserverResult } from '@tanstack/react-query';

interface DeclaresQueryResponse extends ReportListInterface {
  nextPage: number | null;
}

interface UseDeclaresQueryReturnType {
  data: InfiniteData<DeclaresQueryResponse> | undefined;
  moreDataHandler: () =>
    | Promise<InfiniteQueryObserverResult<InfiniteData<DeclaresQueryResponse, unknown>, Error>>
    | undefined;
  isFetching: boolean;
}

const useDeclares = ({ category }: { category: 'post' | 'reply' }): UseDeclaresQueryReturnType => {
  const fetchAccounts = async (pageParam = 1) => {
    const response = await getReportList({
      page: pageParam,
      category,
    });

    return {
      ...response,
      nextPage: response.hasNext ? pageParam + 1 : null,
    };
  };

  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery<DeclaresQueryResponse>({
    queryKey: [QUERY_KEY_DECLARE, category],
    queryFn: ({ pageParam }) => fetchAccounts(pageParam as number),
    getNextPageParam: (lastPage) => lastPage.nextPage,
    initialPageParam: 1,
    staleTime: DEFAULT_STALE_TIME,
  });

  const moreDataHandler = () => {
    if (hasNextPage) {
      return fetchNextPage();
    }
  };

  return { data, moreDataHandler, isFetching };
};

export const QUERY_KEY_DECLARE = 'Declares';
export const DEFAULT_STALE_TIME = 1000 * 60 * 5;

export default useDeclares;
