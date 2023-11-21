import { getReportReplyDetail } from '@/services/admin';
import { ReportDetailReplyListInterface } from '@/types/admin';
import { useInfiniteQuery, InfiniteData, InfiniteQueryObserverResult } from '@tanstack/react-query';

interface DeclaresQueryResponse extends ReportDetailReplyListInterface {
  nextPage: number | null;
}

interface useDeclareRepliesQueryReturnType {
  data: InfiniteData<DeclaresQueryResponse> | undefined;
  moreDataHandler: () =>
    | Promise<InfiniteQueryObserverResult<InfiniteData<DeclaresQueryResponse, unknown>, Error>>
    | undefined;
  isFetching: boolean;
}

const useDeclareReplies = (replyId: string): useDeclareRepliesQueryReturnType => {
  const fetchPosts = async (pageParam = 1) => {
    const response = await getReportReplyDetail({
      page: pageParam,
      id: Number(replyId),
    });

    return {
      ...response,
      nextPage: response.hasNext ? pageParam + 1 : null,
    };
  };

  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery<DeclaresQueryResponse>({
    queryKey: [QUERY_KEY_DECLARE, replyId],
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

  return { data, moreDataHandler, isFetching };
};

export const QUERY_KEY_DECLARE = 'DeclareReplies';
export const STALE_TIME_DEFAULT = 1000 * 60 * 5;

export default useDeclareReplies;
