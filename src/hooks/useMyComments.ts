import { useInfiniteQuery, InfiniteData, InfiniteQueryObserverResult } from '@tanstack/react-query';
import { getMyCommentsData } from '@/services/comments';
import { MyCommentsDataInterface } from '@/types/comment';

interface CommentQueryResponse extends MyCommentsDataInterface {
  nextPage: number | null;
}

interface UseCommentQueryReturnType {
  data: InfiniteData<CommentQueryResponse> | undefined;
  moreDataHandler: () =>
    | Promise<InfiniteQueryObserverResult<InfiniteData<CommentQueryResponse, unknown>, Error>>
    | undefined;
}

const COMMENTS_PER_PAGE = 10;
export const QUERY_KEY = 'my_comments';

const useMyComments = (boardType: string): UseCommentQueryReturnType => {
  const fetchComments = async (pageParam = 1) => {
    const response = await getMyCommentsData(pageParam, COMMENTS_PER_PAGE, boardType);

    return {
      ...response,
      nextPage: response.hasNext ? pageParam + 1 : null,
    };
  };

  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery<CommentQueryResponse>({
    queryKey: [QUERY_KEY, boardType],
    queryFn: ({ pageParam }) => fetchComments(pageParam as number),
    getNextPageParam: (lastPage) => lastPage.nextPage,
    initialPageParam: 1,
  });

  const moreDataHandler = () => {
    if (hasNextPage) {
      return fetchNextPage();
    }
  };

  return { data, moreDataHandler };
};

export default useMyComments;
