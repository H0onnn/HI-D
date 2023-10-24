import { useState, useEffect } from 'react';
import { httpClient } from '@/api/httpClient';
import { PostDetailInterface } from '@/types/post';

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
      }
    };

    fetchPostData();
  }, [postId, postData]);

  return { postData };
};

export default usePostDetailData;
