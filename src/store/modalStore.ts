import { IModalProps, ModalType } from '@/types/modal';
import { create } from 'zustand';

interface ModalStateInterface {
  modalType: ModalType;
  modalOpen: boolean;
  modalProps: IModalProps;
}
interface ModalActionsInterface {
  openModal: (props: Partial<ModalStateInterface>) => void;
  closeModal: () => void;
}

const useModalStore = create<ModalStateInterface & ModalActionsInterface>((set) => ({
  modalType: '',
  modalOpen: false,
  modalProps: {},
  openModal: (props: Partial<ModalStateInterface>) =>
    set(() => ({
      modalOpen: true,
      ...props,
    })),
  closeModal: () => set(() => ({ modalOpen: false })),
}));

export default useModalStore;
