import React from "react";
import type { Root } from "react-dom/client";
import { createRoot } from "react-dom/client";
import Dialog from "./Dialog";
import Portal from "./Portal";
import type { ModalProps } from "./type";

const MARK = "__rc_react_root__";
type ContainerType = (Element | DocumentFragment) & {
  [MARK]?: Root;
};

const createShowModal = (ModalComp: React.ComponentType<ModalProps>) => {
  return function (
    config: Omit<ModalProps, "onClose"> & Partial<Pick<ModalProps, "onClose">>,
  ) {
    const container = document.createDocumentFragment() as ContainerType;

    let currentConfig: ModalProps = { ...config, onClose: close, open: true };

    function render(props: ModalProps) {
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

    function update(
      updateConfig: Partial<ModalProps> | ((config: ModalProps) => ModalProps),
    ) {
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
};

const Modal = (props: ModalProps) => {
  const { getContainer, open, ...rest } = props;

  const portalProps = {
    getContainer,
    open,
  };

  const dialogProps = {
    ...rest,
    open,
  };

  return (
    <Portal {...portalProps}>
      <Dialog {...dialogProps} />
    </Portal>
  );
};

export default Modal;
export const showModal = createShowModal(Modal);
