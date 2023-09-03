import React, { useEffect, useRef } from "react";
import { ToastProps } from "./interface";

const ToastInner: React.FC<ToastProps> = ({
  message,
  onClose,
  open,
  timeClose = 3000,
}) => {
  const timerRef = useRef<NodeJS.Timeout>();
  useEffect(() => {
    if (open) {
      timerRef.current = setTimeout(() => {
        typeof onClose === "function" && onClose();
      }, timeClose);
    }

    return () => {
      clearTimeout(timerRef.current);
    };
  }, [onClose, open, timeClose]);

  let toastClasses =
    "max-w-[45vw] mobile:max-w-[80vw] bg-black text-white rounded-md p-4 transition-opacity duration-200 rounded-[38px]";

  if (open) {
    toastClasses += " opacity-100";
  } else {
    toastClasses += " opacity-0";
  }

  return (
    <div className="fixed inset-x-0 inset-y-0 z-50 flex items-center justify-center">
      <div className={toastClasses}>{message}</div>
    </div>
  );
};

export default ToastInner;
