export const MODAL_TYPES = {
  PAGE: 'PAGE',
  ALERT: 'ALERT',
  SETTING: 'SETTING',
  FLOAT: 'FLOAT',
  CHAT: 'CHAT',
};
export type ModalType =
  | typeof MODAL_TYPES.ALERT
  | typeof MODAL_TYPES.PAGE
  | typeof MODAL_TYPES.SETTING
  | typeof MODAL_TYPES.FLOAT
  | typeof MODAL_TYPES.CHAT;

export type ModalStateType = IAlertModal | IPageModal | ISettingModal;

export interface IAlertModal {
  modalType: typeof MODAL_TYPES.ALERT;
  modalOpen: boolean;
  modalProps: IModalProps & unknown;
}
export interface IPageModal {
  modalType: typeof MODAL_TYPES.PAGE;
  modalOpen: boolean;
  modalProps: IModalProps & unknown;
}
export interface ISettingModal {
  modalType: typeof MODAL_TYPES.SETTING;
  modalOpen: boolean;
  modalProps: IModalProps & unknown;
}

export interface IModalProps {
  url?: string | number;
  title?: string;
  content?: JSX.Element | string;
  confirmText?: string;
  onConfirmHandler?: () => void;
}
