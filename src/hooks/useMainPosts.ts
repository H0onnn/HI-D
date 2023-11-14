import { QueryObserverResult, useQuery } from '@tanstack/react-query';
import { PostInterface } from '@/types/post';
import toast from 'react-hot-toast';
import {
  getDailyHotPostList,
  getFreePostListByMain,
  getHelpPostListByMain,
  getWeeklyHotPostList,
} from '@/services/main';

interface UseMainPostsQueryReturnType {
  weeklyHotPosts: PostInterface[] | undefined;
  dailyHotPosts: PostInterface[] | undefined;
  helpPosts: PostInterface[] | undefined;
  freePosts: PostInterface[] | undefined;
  refetchHelpPosts: () => Promise<QueryObserverResult<PostInterface[], Error>>;
  refetchFreePosts: (newTag: string) => void;
}

const useMainPosts = (): UseMainPostsQueryReturnType => {
  const { data: weeklyHotPosts, error: weeklyHotPostError } = useQuery<PostInterface[]>({
    queryKey: [QUERY_KEY_MAIN_WEEKLY],
    queryFn: () => getWeeklyHotPostList().then((response) => response.dataList),
    staleTime: DEFAULT_STALE_TIME,
  });
  if (weeklyHotPostError) {
    console.error('게시글 데이터 fetching 에러 : ', weeklyHotPostError);
    toast.error('게시글을 불러오는 중 오류가 발생했습니다.', { id: 'weeklyHotPostFetchingError' });
  }

  const { data: dailyHotPosts, error: dailyHotPostError } = useQuery<PostInterface[]>({
    queryKey: [QUERY_KEY_MAIN_DAILY],
    queryFn: () => getDailyHotPostList().then((response) => response.dataList),
    staleTime: DEFAULT_STALE_TIME,
  });
  if (dailyHotPostError) {
    console.error('게시글 데이터 fetching 에러 : ', dailyHotPostError);
    toast.error('게시글을 불러오는 중 오류가 발생했습니다.', { id: 'dailyHotPostFetchingError' });
  }

  const {
    data: helpPosts,
    error: helpPostError,
    refetch: refetchHelpPosts,
  } = useQuery<PostInterface[]>({
    queryKey: [QUERY_KEY_MAIN_HELP],
    queryFn: () => getHelpPostListByMain().then((response) => response.dataList),
    staleTime: DEFAULT_STALE_TIME,
  });
  if (helpPostError) {
    // console.error('게시글 데이터 fetching 에러 : ', helpPostError);
    // toast.error('게시글을 불러오는 중 오류가 발생했습니다.', { id: 'helpPostFetchingError' });
  }

  const {
    data: freePosts,
    error: freePostError,
    refetch: refetchFreePostsInternal,
  } = useQuery<PostInterface[]>({
    queryKey: [QUERY_KEY_MAIN_FREE],
    queryFn: () => getFreePostListByMain(currentTag).then((response) => response.dataList),
    staleTime: DEFAULT_STALE_TIME,
  });
  if (freePostError) {
    // console.error('게시글 데이터 fetching 에러 : ', freePostError);
    // toast.error('게시글을 불러오는 중 오류가 발생했습니다.', { id: 'freePostFetchingError' });
  }

  let currentTag = '';
  const refetchFreePosts = (newTag: string) => {
    currentTag = newTag;
    refetchFreePostsInternal();
  };

  return {
    weeklyHotPosts,
    dailyHotPosts,
    helpPosts,
    freePosts,
    refetchHelpPosts,
    refetchFreePosts,
  };
};

export const QUERY_KEY_MAIN_WEEKLY = 'weeklyHotPost';
export const QUERY_KEY_MAIN_DAILY = 'dailyHotPost';
export const QUERY_KEY_MAIN_HELP = 'mainHelpPost';
export const QUERY_KEY_MAIN_FREE = 'mainFreePost';
export const DEFAULT_STALE_TIME = 1000 * 60 * 5; // 5분

export default useMainPosts;
