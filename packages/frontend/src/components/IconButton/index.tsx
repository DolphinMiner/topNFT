interface IProps {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
  isDisabled?: boolean; // default: false
}

export default function IconButton({
  onClick,
  children,
  className,
  isDisabled = false,
}: IProps) {
  return (
    <div
      className={`${
        isDisabled
          ? "cursor-not-allowed border-disabled shadow-disabled"
          : "cursor-pointer hover:left-1.5 hover:top-1.5 hover:shadow-none"
      } relative inline-block h-footer-button w-footer-button rounded-foot-btn border-2 border-black bg-white pt-4 shadow-foot-btn${
        className ? ` ${className}` : ""
      }`}
      {...(typeof onClick === "function" ? { onClick } : null)}
    >
      {children}
    </div>
  );
}
