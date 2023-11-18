import { useQueryClient, useMutation } from '@tanstack/react-query';
import useModalStore from '@/store/modalStore';
import { useNavigate } from 'react-router-dom';
import { QUERY_KEY as postQueryKey } from './usePostDetailData';
import { postLike, postBookmark, postReport, postDelete } from '@/services/postActions';
import { LINK } from '@/constants/links';
import { PostingDataInterface } from '@/types/posting';
import { ReportDataInterface } from '@/types/report';
import { PostDetailInterface } from '@/types/post';
import { MODAL_TYPES } from '@/types/modal';
import toast from 'react-hot-toast';
import useBodyScrollLock from './useBodyScrollLock';
import { postChatRoom } from '@/services/chat';

const usePostActionHandlers = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { openModal, closeModal } = useModalStore();
  const { lockScroll } = useBodyScrollLock();

  const likePostMutation = useMutation<void, Error, number, { postId: number }>({
    mutationFn: async (postId) => {
      await postLike(postId);
    },
    onSuccess: (_, postId) => {
      const currentData = queryClient.getQueryData([postQueryKey, postId]) as
        | PostDetailInterface
        | undefined;

      if (currentData) {
        const updatedData = {
          ...currentData,
          recommendCount: currentData.isRecommended
            ? currentData.recommendCount - 1
            : currentData.recommendCount + 1,
          isRecommended: !currentData.isRecommended,
        };
        queryClient.setQueryData([postQueryKey, postId], updatedData);
      }
    },
  });

  const likePost = (postId: number) => likePostMutation.mutate(postId);

  const bookmarkPostMutation = useMutation<void, Error, number, { postId: number }>({
    mutationFn: async (postId) => {
      await postBookmark(postId);
    },
    onSuccess: (_, postId) => {
      const currentData = queryClient.getQueryData([postQueryKey, postId]) as
        | PostDetailInterface
        | undefined;
      if (currentData) {
        const updatedData = {
          ...currentData,
          isBookmarked: !currentData.isBookmarked,
        };
        queryClient.setQueryData([postQueryKey, postId], updatedData);
      }
    },
  });

  const bookmarkPost = (postId: number) => bookmarkPostMutation.mutate(postId);

  const reportPost = async (postId: number, data: ReportDataInterface) => {
    try {
      await postReport(postId, data);
      toast.success('신고가 접수되었어요.', { id: 'postReportSuccess' });
    } catch (err: unknown) {
      toast.error('이미 신고 처리된 게시글이에요.', { id: 'postReportFail' });
    }
  };

  const editPost = (post: PostingDataInterface, postId: number) => {
    navigate(LINK.POST_EDIT.replace(':id', postId.toString()), {
      state: { post },
    }),
      console.log(post);
  };

  const deletePost = async (postId: number) => {
    closeModal();
    try {
      await postDelete(postId);
      navigate(LINK.MAIN);
      toast.success('게시글이 삭제되었어요.', { id: 'postDeleteSuccess' });
    } catch (err: unknown) {
      console.error('게시글 삭제 오류 : ', err);
      toast.error('게시글 삭제 중 오류가 발생했어요.', { id: 'postDeleteFail' });
    }
  };

  const deletePostHandler = (postId: number) => {
    openModal({
      modalType: MODAL_TYPES.ALERT,
      modalProps: {
        title: '해당 게시글을 삭제하시겠어요?',
        content: '삭제한 게시글 데이터는 복구할 수 없어요',
        confirmText: '삭제',
        onConfirmHandler: () => deletePost(postId),
      },
    });
  };

  const enterChatRoomHandler = async (memberId: number) => {
    const response = await postChatRoom({ memberId });
    if (!response) return;
    navigate(LINK.CHAT);
    openModal({
      modalType: MODAL_TYPES.CHAT,
      modalProps: { url: response?.chatRoomId as number },
    });
    lockScroll();
  };

  return {
    likePost,
    bookmarkPost,
    reportPost,
    editPost,
    deletePostHandler,
    enterChatRoomHandler,
  };
};

export default usePostActionHandlers;
