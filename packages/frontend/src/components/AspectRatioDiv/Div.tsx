interface IProps {
  className?: string;
  rate: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export default function AspectRatioDiv({
  className,
  rate,
  children,
  style,
}: IProps) {
  return (
    <div className={className} {...(style && { style })}>
      <div className="relative" style={{ paddingTop: rate }}>
        <div className="absolute inset-x-0 inset-y-0">{children}</div>
      </div>
    </div>
  );
}
