export interface DialogBaseProps {
  getContainer?: GetContainerFn;
  open?: boolean; // default: false;
  onClose?: () => void;
  timeClose?: number; // ms; default: 3000
}
export type GetContainerFn = HTMLElement | (() => HTMLElement) | (() => string);
export interface DialogProps extends DialogBaseProps {
  maskClassName?: string;
  contentClassName?: string;
  titleClassName?: string;
  bodyClassName?: string;
  title: React.ReactNode | null;
  content: React.ReactNode;
  Icon?: React.ReactNode;
  withAvatar?: boolean;
  maskClosable?: boolean; // default: true
  closeIcon?: React.ReactNode;
  // a border bottom for online
  onlineDivideBorder?: boolean; // default: false
  escClose?: boolean; // default: true
  onBack?: () => void; // show back button & mask click will call onBack function
}

export interface ShowModalHandle<T> {
  close: () => void;
  update: (config: Partial<T>) => void;
}

export interface ToastProps extends DialogBaseProps {
  message: React.ReactNode;
  type?: string;
}

export interface ShowToastHandle {
  close: () => void;
  update: (
    config: Partial<ToastProps> | ((config: ToastProps) => ToastProps),
  ) => void;
}
