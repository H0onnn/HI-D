import { useState, useEffect } from 'react';
import { httpClient } from '@/api/httpClient';
import { PostDetailInterface } from '@/types/post';
import toast from 'react-hot-toast';

const usePostDetailData = (postId: number) => {
  const [postData, setPostData] = useState<PostDetailInterface>();

  useEffect(() => {
    if (postData) return;

    const fetchPostData = async () => {
      try {
        const response = await httpClient.post.get.posts(postId);
        setPostData(response.data);
      } catch (err: unknown) {
        console.error('게시글 데이터 fetching 에러 : ', err);
        toast.error('게시글을 불러오는 중 오류가 발생했습니다.', { id: 'postFetchingError' });
      }
    };

    fetchPostData();
  }, [postId, postData]);

  return { postData };
};

export default usePostDetailData;
