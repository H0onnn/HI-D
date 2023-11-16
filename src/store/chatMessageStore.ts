import { MessageInterface } from '@/types/chat';
import { create } from 'zustand';

interface MessageStore {
  messages: MessageInterface[];
  pushMessage: (message: MessageInterface) => void;
  initMessages: () => void;
}

export const useChatMessageStore = create<MessageStore>((set) => ({
  messages: [],
  pushMessage: (message) =>
    set((state) => ({
      messages: [...state.messages, message],
    })),
  initMessages: () =>
    set(() => ({
      messages: [],
    })),
}));
