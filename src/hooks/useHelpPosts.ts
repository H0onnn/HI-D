import { useInfiniteQuery, InfiniteData, InfiniteQueryObserverResult } from '@tanstack/react-query';
import { HelpPostListProps, PostListInterface } from '@/types/post';
import { getHelpPostList } from '@/services/post';

export interface HelpPostQueryResponse extends PostListInterface {
  nextPage: number | null;
}
interface UseHelpPostQueryReturnType {
  data: InfiniteData<HelpPostQueryResponse> | undefined;
  moreDataHandler: () =>
    | Promise<InfiniteQueryObserverResult<InfiniteData<HelpPostQueryResponse, unknown>, Error>>
    | undefined;
  isFetching: boolean;
}

const useHelpPosts = ({ major, keyword }: HelpPostListProps): UseHelpPostQueryReturnType => {
  const fetchPosts = async (pageParam = 1) => {
    const response = await getHelpPostList({ majorCategory: major, page: pageParam, keyword });

    return {
      ...response,
      nextPage: response.hasNext ? pageParam + 1 : null,
    };
  };

  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery<HelpPostQueryResponse>({
    queryKey: [QUERY_KEY_HELP, keyword, major],
    queryFn: ({ pageParam }) => fetchPosts(pageParam as number),
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

export const QUERY_KEY_HELP = 'helpPost';
export const DEFAULT_STALE_TIME = 1000 * 60 * 5;

export default useHelpPosts;
