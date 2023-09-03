interface IProps {
  className?: string;
}

export default function FlowerLoading({ className }: IProps) {
  const commonClassName =
    "absolute w-1/4 h-[6%] bg-current rounded-[28%] left-0 top-[47%] origin-[200%_50%] animate-flower-loading";

  return (
    <div className={`relative inline-block${className ? ` ${className}` : ""}`}>
      <div className={`${commonClassName} animation-delay700`}></div>
      <div className={`${commonClassName} animation-delay600 rotate-[45deg]`} />
      <div className={`${commonClassName} animation-delay500 rotate-[90deg]`} />
      <div
        className={`${commonClassName} animation-delay400 rotate-[135deg]`}
      />
      <div
        className={`${commonClassName} animation-delay300 rotate-[180deg]`}
      />
      <div
        className={`${commonClassName} animation-delay200 rotate-[225deg]`}
      />
      <div
        className={`${commonClassName} animation-delay100 rotate-[270deg]`}
      />
      <div className={`${commonClassName} rotate-[315deg]`}></div>
    </div>
  );
}
