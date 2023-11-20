import { useInfiniteQuery, InfiniteData, InfiniteQueryObserverResult } from '@tanstack/react-query';
import { getChatRoomList } from '@/services/chat';
import { ChatRoomListInterface } from '@/types/chat';

interface ChatRoomsQueryResponse extends ChatRoomListInterface {
  nextPage: number | null;
}

interface UseChatRoomsQueryReturnType {
  data: InfiniteData<ChatRoomsQueryResponse> | undefined;
  moreDataHandler: () =>
    | Promise<InfiniteQueryObserverResult<InfiniteData<ChatRoomsQueryResponse, unknown>, Error>>
    | undefined;
  isFetching: boolean;
  refetch: () => void;
}

const useChatRooms = (): UseChatRoomsQueryReturnType => {
  const fetchChatRooms = async (pageParam = 1) => {
    const response = await getChatRoomList({
      page: pageParam,
    });

    return {
      ...response,
      nextPage: response.hasNext ? pageParam + 1 : null,
    };
  };

  const { data, fetchNextPage, hasNextPage, isFetching, refetch } =
    useInfiniteQuery<ChatRoomsQueryResponse>({
      queryKey: [QUERY_KEY_CHAT_ROOM],
      queryFn: ({ pageParam }) => fetchChatRooms(pageParam as number),
      getNextPageParam: (lastPage) => lastPage.nextPage,
      initialPageParam: 1,
      staleTime: STALE_TIME_CHAT_ROOM,
    });

  const moreDataHandler = () => {
    if (hasNextPage) {
      return fetchNextPage();
    }
  };

  return { data, moreDataHandler, isFetching, refetch };
};

export const QUERY_KEY_CHAT_ROOM = 'chatRooms';
export const STALE_TIME_CHAT_ROOM = 1000 * 60 * 1; // 1분

export default useChatRooms;
