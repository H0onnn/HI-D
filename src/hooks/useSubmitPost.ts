import { useQueryClient, useMutation, UseMutationResult } from '@tanstack/react-query';
import { QUERY_KEY as postQueryKey } from './usePostDetailData';
import { postNeedHelp, postFree, patchPost } from '@/services/posting';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { LINK } from '@/constants/links';
import { PostDetailInterface } from '@/types/post';
import { PostingDataInterface } from '@/types/posting';

interface UseSubmitPostReturnType {
  submitPost: (
    type: 'needhelp' | 'free',
    data: PostingDataInterface,
  ) => Promise<PostDetailInterface>;
  editPost: UseMutationResult<
    void,
    Error,
    { postId: number; data: PostingDataInterface },
    { postId: number }
  >['mutate'];
}

const useSubmitPost = (): UseSubmitPostReturnType => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const submitPost = async (
    type: 'needhelp' | 'free',
    data: PostingDataInterface,
  ): Promise<PostDetailInterface> => {
    try {
      const response = type === 'needhelp' ? await postNeedHelp(data) : await postFree(data);
      const postId = response.postId;

      toast.success('게시물이 등록되었어요.', {
        id: 'postingSuccess',
      });

      navigate(LINK.POST_DETAIL.replace(':id', postId.toString()));
      return response;
    } catch (err: unknown) {
      toast.error('게시물 등록에 실패했어요.', {
        id: 'postingFail',
      });
      throw err;
    }
  };

  const editPostMutation = useMutation<
    void,
    Error,
    { postId: number; data: PostingDataInterface },
    { postId: number }
  >({
    mutationFn: (variables) => patchPost(variables.postId, variables.data),
    onError: () => {
      toast.error('게시물 수정에 실패했어요.', { id: 'editFail' });
    },
    onSuccess: (_, variables) => {
      toast.success('게시물이 수정되었어요.', { id: 'editSuccess' });
      navigate(LINK.POST_DETAIL.replace(':id', variables.postId.toString()));
      queryClient.invalidateQueries({ queryKey: [postQueryKey, variables.postId] });
    },
  });

  return {
    submitPost,
    editPost: editPostMutation.mutate,
  };
};

export default useSubmitPost;
