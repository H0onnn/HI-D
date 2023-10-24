import { useState, useEffect } from 'react';
import { CommentDataInterface } from '@/types/comment';
import { httpClient } from '@/api/httpClient';

const useComments = (postId: number, isCommented: boolean) => {
  const [comments, setComments] = useState<CommentDataInterface[]>([]);
  const [hasFetched, setHasFetched] = useState<boolean>(false);

  useEffect(() => {
    if (isCommented && !hasFetched) {
      const fetchComments = async () => {
        try {
          const response = await httpClient.comment.get.replies(postId);
          setComments(response.data.dataList);
          setHasFetched(true);
        } catch (err: unknown) {
          console.error('댓글 데이터 fetching 에러 : ', err);
        }
      };

      fetchComments();
    }
  }, [postId, isCommented, hasFetched]);

  return { comments };
};

export default useComments;
