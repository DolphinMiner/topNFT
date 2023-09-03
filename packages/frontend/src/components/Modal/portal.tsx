import React, { useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { GetContainerFn, DialogBaseProps } from "./interface";
import { canUseDom } from "@/utils/html";

function getContainerFromProps(getContainer?: GetContainerFn) {
  let eleInfo: GetContainerFn | string | HTMLElement | null | undefined =
    getContainer;
  if (typeof getContainer === "function") {
    eleInfo = getContainer();
  }

  const _canUseDom = canUseDom();

  if (
    typeof eleInfo === "string" &&
    _canUseDom &&
    typeof document?.querySelector === "function"
  ) {
    eleInfo = document.querySelector(eleInfo) as HTMLElement;
  }

  return eleInfo instanceof HTMLElement
    ? eleInfo
    : (_canUseDom && document?.createElement("div")) || null;
}

function clearBodyOverflowHidden() {
  Promise.resolve().then(() => {
    if (!document?.querySelector(".cus-modal-dialog.open")) {
      document.body.style.overflowY = "unset";
    }
  });
}

export default function Portal({
  getContainer,
  open,
  children,
}: DialogBaseProps & { children: React.ReactNode }) {
  const [container, setContainer] = useState<HTMLElement | null>(
    getContainerFromProps(getContainer),
  );
  const hasAppendRef = useRef<boolean>(false);

  useLayoutEffect(() => {
    setContainer(getContainerFromProps(getContainer));
  }, [getContainer]);

  useLayoutEffect(() => {
    if (container) {
      const parentElement = container.parentElement;

      if (open && !parentElement) {
        document.body.appendChild(container);
        hasAppendRef.current = true;
      } else if (!open && parentElement && hasAppendRef.current) {
        parentElement.removeChild(container);
        hasAppendRef.current = false;
      }
    }
  }, [open, container]);

  useLayoutEffect(() => {
    if (open) {
      document.body.style.overflowY = "hidden";
    } else {
      clearBodyOverflowHidden();
    }
    return () => {
      clearBodyOverflowHidden();
    };
  }, [open]);

  if (!(container && open)) return null;

  return createPortal(React.cloneElement(children as any), container);
}
