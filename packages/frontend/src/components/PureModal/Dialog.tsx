import classNames from "classnames";
import React, { useCallback, useEffect, useRef } from "react";
import { DialogProps } from "./type";

const Dialog = ({
  maskClassName,

  className,
  content,

  maskClosable = true,
  escClose = true,

  onClose,
}: DialogProps) => {
  const bodyRef = useRef<HTMLDivElement>(null);

  const preventEvent: React.MouseEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      event.stopPropagation();
    },
    [],
  );

  const onKeyDownHandle = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Escape" || event.keyCode === 27) {
        event.stopPropagation();
        onClose();
      }
    },
    [onClose],
  );

  useEffect(() => {
    bodyRef.current?.focus();
  }, []);

  return (
    <div
      className={classNames([
        "fixed inset-x-0 inset-y-0 z-20 flex items-center justify-center bg-black/60",
        maskClassName ? maskClassName : "",
      ])}
      {...(maskClosable && onClose ? { onClick: onClose } : null)}
    >
      <div
        className={classNames([
          "relative outline-none",
          className ? className : "",
        ])}
        onClick={preventEvent}
        tabIndex={-1}
        {...(escClose ? { onKeyDown: onKeyDownHandle } : null)}
        ref={bodyRef}
      >
        {content}
      </div>
    </div>
  );
};

export default Dialog;
