import { useInfiniteQuery, InfiniteData } from '@tanstack/react-query';
import { getHelpPostList } from '@/services/post';
import { PostListInterface, RequestHelpPostListInterface } from '@/types/post';
import toast from 'react-hot-toast';
import useObserver from './useObserver';

const useHelpPostList = ({
  majorCategory = '',
  keyword = '',
}: Partial<RequestHelpPostListInterface>) => {
  const { data, error, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery<
    InfiniteData<PostListInterface>
  >({
    queryKey: ['helpPostList', majorCategory, keyword],
    queryFn: async ({ pageParam = 1 }) =>
      await getHelpPostList({ page: pageParam as number, majorCategory, keyword }),
    getNextPageParam: (lastPage, allPages, lastPageParam) =>
      lastPage.hasNext ? (lastPageParam as number) + 1 : null,
  });

  // const postList = data?.pages.flatMap((page) => page.data);

  const infinityRef = useObserver(hasNextPage, fetchNextPage);

  if (error) {
    console.error('게시글 데이터 fetching 에러 : ', error);
    toast.error('게시글을 불러오는 중 오류가 발생했습니다.', { id: 'postFetchingError' });
  }

  return { postList: data, isFetching, infinityRef };
};

export default useHelpPostList;
