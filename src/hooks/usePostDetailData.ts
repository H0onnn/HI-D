import { useQuery } from '@tanstack/react-query';
import { getPostDetailData } from '@/api/services/post';
import { PostDetailInterface } from '@/types/post';
import toast from 'react-hot-toast';

const usePostDetailData = (postId: number) => {
  const { data: postData, error } = useQuery<PostDetailInterface>({
    queryKey: ['postDetailData', postId],
    queryFn: () => getPostDetailData(postId),
    staleTime: 1000 * 60 * 5, // 5분
  });

  if (error) {
    console.error('게시글 데이터 fetching 에러 : ', error);
    toast.error('게시글을 불러오는 중 오류가 발생했습니다.', { id: 'postFetchingError' });
  }

  return { postData };
};

export default usePostDetailData;
