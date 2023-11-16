import { MessageInterface } from '@/types/chat';
import { create } from 'zustand';

interface MessageStore {
  messages: MessageInterface[];
  enterMember: string;
  pushMessage: (message: MessageInterface) => void;
  initMessages: () => void;
}

export const useChatMessageStore = create<MessageStore>((set) => ({
  messages: [],
  enterMember: '',
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
}));
