import { useQueryClient, useMutation, UseMutationResult } from '@tanstack/react-query';
import { postNeedHelp, postFree, patchPost } from '@/services/posting';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { LINK } from '@/constants/links';
import { PostingDataInterface } from '@/types/posting';

interface UseSubmitPostReturnType {
  submitPost: (type: 'needhelp' | 'free', data: PostingDataInterface) => Promise<void>;
  editPost: UseMutationResult<
    void,
    unknown,
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
  ): Promise<void> => {
    try {
      const postId = type === 'needhelp' ? await postNeedHelp(data) : await postFree(data);
      toast.success('게시물이 등록되었어요.', {
        id: 'postingSuccess',
      });

      navigate(LINK.POST_DETAIL.replace(':id', postId.toString()));
    } catch (err: unknown) {
      toast.error('게시물 등록에 실패했어요.', {
        id: 'postingFail',
      });
    }
  };

  const editPostMutation = useMutation<
    void,
    unknown,
    { postId: number; data: PostingDataInterface },
    { postId: number }
  >({
    mutationFn: async ({ postId, data }) => {
      await patchPost(postId, data);
    },
    onError: () => {
      toast.error('게시물 수정에 실패했어요.', {
        id: 'editFail',
      });
    },
    onSuccess: (_, postData) => {
      toast.success('게시물이 수정되었어요.', {
        id: 'editSuccess',
      });
      navigate(LINK.POST_DETAIL.replace(':id', postData.postId.toString()));
      queryClient.invalidateQueries({ queryKey: ['postDetailData', postData.postId] });
    },
  });

  const editPost = editPostMutation.mutate;

  return {
    submitPost,
    editPost,
  };
};

export default useSubmitPost;
