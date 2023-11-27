import { MessageInterface } from '@/types/chat';
import { create } from 'zustand';

interface MessageStore {
  messages: MessageInterface[];
  enterMember: string;
  newChatNotification: boolean;
  pushMessage: (message: MessageInterface) => void;
  initMessages: () => void;
  setNewChatNotification: (payload: boolean) => void;
}

export const useChatMessageStore = create<MessageStore>((set) => ({
  messages: [],
  enterMember: '',
  newChatNotification: false,
  pushMessage: (message) => {
    if (message.type === 'ENTER') {
      set(() => ({
        messages: [],
        enterMember: message.sender,
      }));
    } else
      set((state) => ({
        messages: [...state.messages, message],
      }));
  },
  initMessages: () =>
    set(() => ({
      messages: [],
      enterMember: '',
    })),
  setNewChatNotification: (payload) =>
    set(() => ({
      newChatNotification: payload,
    })),
}));
