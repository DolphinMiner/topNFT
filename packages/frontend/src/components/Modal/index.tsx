import React from "react";
import { createRoot } from "react-dom/client";
import type { Root } from "react-dom/client";
import { DialogProps, DialogBaseProps, ToastProps } from "./interface";
import Portal from "./portal";
import Dialog from "./dialog";
import ToastInner from "./toast";
import { imgUrl } from "@/constants/url";

export default function Modal(props: DialogProps) {
  return (
    <Portal {...props}>
      <Dialog {...props} />
    </Portal>
  );
}

export function Toast(props: ToastProps) {
  return (
    <Portal {...props}>
      <ToastInner {...props} />
    </Portal>
  );
}

// has Icon
export function AvatarModal(
  props: Omit<DialogProps, "Icon"> & { Icon?: null },
) {
  return (
    <Modal
      Icon={
        <img
          className="absolute left-1/2 top-[18px] -translate-x-1/2 -translate-y-full"
          src={`${imgUrl}/dialog-avatar.png`}
          width="115px"
          alt="dialog-avatar"
        />
      }
      {...props}
    />
  );
}

const MARK = "__rc_react_root__";
type ContainerType = (Element | DocumentFragment) & {
  [MARK]?: Root;
};

export function createShowModalFn<T extends DialogBaseProps>(
  ModalComp: React.ComponentType<T>,
) {
  return function (config: Omit<T, "onClose"> & Partial<Pick<T, "onClose">>) {
    const container = document.createDocumentFragment() as ContainerType;

    let currentConfig = {
      ...config,
      onClose: close,
      open: true,
    } as T;

    function render(props: T) {
      const root = container[MARK] || (container[MARK] = createRoot(container));
      root.render(<ModalComp {...props} />);
    }

    function destroy() {
      return Promise.resolve().then(() => {
        container[MARK]?.unmount();
        delete container[MARK];
      });
    }

    function close() {
      if (typeof config.onClose === "function") config.onClose();
      destroy();
    }

    function update(updateConfig: Partial<T> | ((config: T) => T)) {
      if (typeof updateConfig === "function") {
        currentConfig = updateConfig(currentConfig);
      } else {
        currentConfig = { ...currentConfig, ...updateConfig };
      }
      render(currentConfig);
    }

    render(currentConfig);

    return {
      close,
      update,
    };
  };
}

export const showModal = createShowModalFn(Modal);
// has Icon
export const showAvatarModal = createShowModalFn(AvatarModal);
export const showToast = createShowModalFn(Toast);
