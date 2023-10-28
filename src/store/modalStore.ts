// import { create } from 'zustand';

// interface ModalStateInterface<D> {
//   isOpen: boolean;
//   info?: D;
// }
// interface ModalActionsInterface<D> {
//   changeModalStatus: (props: ModalStateInterface<D>) => void;
// }
// interface ModalStoreInterface<D> extends ModalStateInterface<D>, ModalActionsInterface<D> {}

// const useModalStore = <D>() =>
//   create<ModalStoreInterface<D>>((set) => ({
//     isOpen: false,
//     changeModalStatus: (props: ModalStateInterface<D>) =>
//       set((state: ModalStoreInterface<D>) => ({
//         ...state,
//         ...props,
//       })),
//   }));

// export default useModalStore;

import { create } from 'zustand';
interface ModalInfoInterface {
  type?: 'alert' | 'page' | 'setting';
  url?: string | number;
  title?: string;
  content?: string;
  confirmText?: string;
  onConfirm?: () => void;
}

interface ModalStateInterface {
  isOpen: boolean;
  info: ModalInfoInterface;
}
interface ModalActionsInterface {
  changeModalStatus: (props: Partial<ModalStateInterface>) => void;
}
interface ModalStoreInterface extends ModalStateInterface, ModalActionsInterface {}

const useModalStore = create<ModalStoreInterface>((set) => ({
  isOpen: false,
  info: {
    type: 'alert',
    url: '',
    title: '',
    content: '',
    confirmText: '',
    onConfirm: () => {},
  },
  changeModalStatus: (props: Partial<ModalStateInterface>) =>
    set((state: ModalStoreInterface) => ({
      ...state,
      ...props,
    })),
}));

export default useModalStore;
