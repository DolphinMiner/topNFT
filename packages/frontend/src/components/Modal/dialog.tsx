import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { DialogProps } from "./interface";
import CloseIcon from "@/components/CloseIcon";
import { imgUrl } from "@/constants/url";

export default function Dialog({
  maskClassName,
  contentClassName,
  titleClassName,
  title,
  content,
  bodyClassName,
  Icon,
  onClose,
  maskClosable = true,
  closeIcon,
  onlineDivideBorder = false,
  escClose = true,
  onBack,
  withAvatar,
  open,
}: DialogProps) {
  const bodyRef = useRef<HTMLDivElement>(null);
  const [animationShow, setAnimationShow] = useState(false);
  const preventEvent: React.MouseEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      event.stopPropagation();
    },
    [],
  );

  if (withAvatar) {
    Icon = (
      <img
        className="absolute left-1/2 top-[18px] -translate-x-1/2 -translate-y-full"
        src={`${imgUrl}/dialog-avatar.png`}
        width="115px"
        alt="dialog-avatar"
      />
    );
  }

  const onKeyDownHandle = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Escape" || event.keyCode === 27) {
        event.stopPropagation();
        (typeof onBack === "function" && onBack()) ||
          (typeof onClose === "function" && onClose());
      }
    },
    [onBack, onClose],
  );

  useEffect(() => {
    bodyRef.current?.focus();
  }, []);

  useLayoutEffect(() => {
    setAnimationShow(true);
    return () => {
      setAnimationShow(false);
    };
  }, []);

  const contentPxName = "px-4"; // padding of left & right
  const hasOnBack = typeof onBack === "function";

  const CloseIconComp = closeIcon ? (
    React.cloneElement(closeIcon as any, { onClick: onClose })
  ) : (
    <CloseIcon
      onClick={onClose}
      className="mt-[0.2em] cursor-pointer"
      color="#000"
    />
  );
  return (
    <div
      className={`cus-modal-dialog${
        open ? " open" : ""
      } fixed inset-x-0 inset-y-0 z-40 flex items-center justify-center mobile:items-end bg-black/60${
        maskClassName ? ` ${maskClassName}` : ""
      }`}
      {...(maskClosable ? { onClick: onClose } : null)}
    >
      <div
        className={`relative transition-transform ${
          animationShow ? "translate-y-0" : "translate-y-full"
        } shadow-modal flex min-w-[10%] max-w-[80%] flex-col rounded-xl border-4 border-softBorder bg-footer-bg outline-none mobile:w-full mobile:max-w-none mobile:rounded-b-none ${
          contentClassName ? ` ${contentClassName}` : ""
        } ${
          Icon ? "max-h-[calc(85vh-84px)] desktop:mt-[84px]" : "max-h-[85vh]"
        }`}
        onClick={preventEvent}
        tabIndex={-1}
        {...(escClose ? { onKeyDown: onKeyDownHandle } : null)}
        ref={bodyRef}
      >
        {Icon || null}
        {title !== null ? (
          <div
            className={`flex ${contentPxName} py-4 ${
              Icon ? " pt-7" : ""
            } font-MouldyCheese-Regular text-xl items-start${
              titleClassName ? ` ${titleClassName}` : ""
            }${
              onlineDivideBorder
                ? " desktop:border-b-[1px] desktop:border-black desktop:border-opacity-25"
                : ""
            }`}
          >
            {hasOnBack ? (
              <img
                src={`/back.png`}
                alt="back"
                onClick={onBack}
                className="w-[22px] cursor-pointer"
              />
            ) : (
              CloseIconComp
            )}
            {typeof title === "string" ? (
              <div className="flex-1 px-2 text-center">{title}</div>
            ) : (
              title
            )}
            {hasOnBack ? CloseIconComp : <div className="w-[22px]" />}
          </div>
        ) : null}
        <div
          className={`${contentPxName} flex-1 overflow-y-scroll pb-4 ${
            bodyClassName ? ` ${bodyClassName}` : ""
          }`}
        >
          {content}
        </div>
      </div>
    </div>
  );
}
