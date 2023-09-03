import React from "react";

type GetContainerFn = HTMLElement | (() => HTMLElement) | (() => string);

export type PortalProps = {
  children: React.ReactNode;
  getContainer?: GetContainerFn;
  open?: boolean; // default: false
};

export type DialogProps = {
  maskClassName?: string;

  content: React.ReactNode;
  className?: string;

  onClose: () => void;
  maskClosable?: boolean; // default: true
  escClose?: boolean; // default: true
};

export type ModalProps = Pick<PortalProps, "getContainer" | "open"> &
  DialogProps;
