import { useQueryClient, useMutation } from '@tanstack/react-query';
import usePostActionState from './usePostActionState';
import { useNavigate } from 'react-router-dom';
import { postLike, postBookmark, postReport, postDelete } from '@/services/postActions';
import { LINK } from '@/constants/links';
import toast from 'react-hot-toast';
import { PostingDataInterface } from '@/types/posting';
import { ReportDataInterface } from '@/types/report';
import { PostDetailInterface } from '@/types/post';

const usePostActionHandlers = () => {
  const { toggleReport } = usePostActionState();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const likePostMutation = useMutation<void, unknown, number, { postId: number }>({
    mutationFn: async (postId) => {
      await postLike(postId);
    },
    onSuccess: (_, postId) => {
      queryClient.invalidateQueries({ queryKey: ['postDetailData', postId] });
    },
  });

  const likePost = (postId: number) => {
    const currentData = queryClient.getQueryData(['postDetailData', postId]) as
      | PostDetailInterface
      | undefined;
    if (currentData) {
      const updatedData = {
        ...currentData,
        likesCount: currentData.isRecommended
          ? currentData.recommendCount - 1
          : currentData.recommendCount + 1,
        isLiked: !currentData.isRecommended,
      };
      queryClient.setQueryData(['postDetailData', postId], updatedData);
    }

    likePostMutation.mutate(postId);
  };

  const bookmarkPostMutation = useMutation<void, unknown, number, { postId: number }>({
    mutationFn: async (postId) => {
      await postBookmark(postId);
    },
    onSuccess: (_, postId) => {
      queryClient.invalidateQueries({ queryKey: ['postDetailData', postId] });
    },
  });

  const bookmarkPost = (postId: number) => {
    const currentData = queryClient.getQueryData(['postDetailData', postId]) as
      | PostDetailInterface
      | undefined;
    if (currentData) {
      const updatedData = {
        ...currentData,
        isBookmarked: !currentData.isBookmarked,
      };
      queryClient.setQueryData(['postDetailData', postId], updatedData);
    }

    bookmarkPostMutation.mutate(postId);
  };

  const reportPost = async (postId: number, data: ReportDataInterface) => {
    try {
      await postReport(postId, data);
      toggleReport();
      toast.success('신고가 접수되었어요.', { id: 'postReportSuccess' });
    } catch (err: unknown) {
      toast.error('신고 접수 중 오류가 발생했습니다.', { id: 'postReportFail' });
    }
  };

  const editPost = (post: PostingDataInterface, postId: number) => {
    navigate(LINK.POST_EDIT.replace(':id', postId.toString()), {
      state: { post },
    }),
      console.log(post);
  };

  const deletePost = async (postId: number) => {
    try {
      if (window.confirm('해당 게시글을 삭제하시겠어요?')) {
        await postDelete(postId);
        navigate(LINK.MAIN);
        toast.success('게시글이 삭제되었습니다.', { id: 'postDeleteSuccess' });
      }
    } catch (err: unknown) {
      console.error('게시글 삭제 오류 : ', err);
      toast.error('게시글 삭제 중 오류가 발생했습니다.', { id: 'postDeleteFail' });
    }
  };

  return {
    likePost,
    bookmarkPost,
    reportPost,
    editPost,
    deletePost,
  };
};

export default usePostActionHandlers;
