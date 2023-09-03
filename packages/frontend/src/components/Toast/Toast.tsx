import React, { useState, useEffect } from "react";

interface ToastProps {
  message: React.ReactNode;
  type?: string;
}

const Toast: React.FC<ToastProps> = ({ message, type }) => {
  const [showToast, setShowToast] = useState(true);

  if (type) console.log(type);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  let toastClasses =
    "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white rounded-md p-4 transition-opacity duration-200 rounded-[38px] mx-4 my-4";

  if (showToast) {
    toastClasses += " opacity-100";
  } else {
    toastClasses += " opacity-0";
  }

  return <div className={toastClasses}>{message}</div>;
};

export default Toast;
