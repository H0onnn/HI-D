import { useInfiniteQuery, InfiniteData, InfiniteQueryObserverResult } from '@tanstack/react-query';
import { PostListInterface } from '@/types/post';
import { getMyBookmarkList, getMyPostList } from '@/services/post';

export interface MyPostsQueryResponse extends PostListInterface {
  nextPage: number | null;
}
interface UseMyPostQueryReturnType {
  data: InfiniteData<MyPostsQueryResponse> | undefined;
  moreDataHandler: () =>
    | Promise<InfiniteQueryObserverResult<InfiniteData<MyPostsQueryResponse, unknown>, Error>>
    | undefined;
  isFetching: boolean;
}

const useMyPosts = ({
  category,
  location,
}: {
  category: 'NEED_HELP' | 'FREE';
  location: 'bookmarks' | 'posts';
}): UseMyPostQueryReturnType => {
  const fetchPosts = async (pageParam = 1) => {
    if (location === 'bookmarks') {
      const response = await getMyBookmarkList(pageParam, category);
      return {
        ...response,
        nextPage: response.hasNext ? pageParam + 1 : null,
      };
    } else {
      const response = await getMyPostList(pageParam, category);
      return {
        ...response,
        nextPage: response.hasNext ? pageParam + 1 : null,
      };
    }
  };

  const { data, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery<MyPostsQueryResponse>({
    queryKey: [QUERY_KEY_MY_POST, location, category],
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

export const QUERY_KEY_MY_POST = 'myPosts';
export const DEFAULT_STALE_TIME = 1000 * 60 * 5;

export default useMyPosts;
