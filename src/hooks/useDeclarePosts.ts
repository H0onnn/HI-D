import { getReportPostDetail } from '@/services/admin';
import { ReportDetailPostListInterface } from '@/types/admin';
import { useInfiniteQuery, InfiniteData, InfiniteQueryObserverResult } from '@tanstack/react-query';

interface DeclaresQueryResponse extends ReportDetailPostListInterface {
  nextPage: number | null;
}

interface UseDeclarePostsQueryReturnType {
  data: InfiniteData<DeclaresQueryResponse> | undefined;
  moreDataHandler: () =>
    | Promise<InfiniteQueryObserverResult<InfiniteData<DeclaresQueryResponse, unknown>, Error>>
    | undefined;
  isFetching: boolean;
  refetch: () => void;
}

const useDeclarePosts = (postId: string): UseDeclarePostsQueryReturnType => {
  const fetchPosts = async (pageParam = 1) => {
    const response = await getReportPostDetail({
      page: pageParam,
      id: Number(postId),
    });

    return {
      ...response,
      nextPage: response.hasNext ? pageParam + 1 : null,
    };
  };

  const { data, fetchNextPage, hasNextPage, isFetching, refetch } =
    useInfiniteQuery<DeclaresQueryResponse>({
      queryKey: [QUERY_KEY_DECLARE, postId],
      queryFn: ({ pageParam }) => fetchPosts(pageParam as number),
      getNextPageParam: (lastPage) => lastPage.nextPage,
      initialPageParam: 1,
      staleTime: STALE_TIME_DEFAULT,
    });

  const moreDataHandler = () => {
    if (hasNextPage) {
      return fetchNextPage();
    }
  };

  return { data, moreDataHandler, isFetching, refetch };
};

export const QUERY_KEY_DECLARE = 'DeclarePosts';
export const STALE_TIME_DEFAULT = 1000 * 60 * 5;

export default useDeclarePosts;
