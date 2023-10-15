type DiscordProps = {
  className?: string;
  width?: number;
  height?: number;
};
export const Discord = ({
  width = 26,
  height = 26,
  className,
}: DiscordProps) => {
  return (
    <svg
      width={`${width}px`}
      height={`${height}px`}
      viewBox="0 0 24 24"
      version="1.1"
      className={className}
    >
      <path
        id="primary"
        d="M20.11,6.25A2,2,0,0,0,18.9,5.06,24.45,24.45,0,0,0,12,4,24.45,24.45,0,0,0,5.1,5.06,2,2,0,0,0,3.89,6.25,30.79,30.79,0,0,0,2,16.67a1.08,1.08,0,0,0,.21.62A8.31,8.31,0,0,0,7.93,20a1,1,0,0,0,1-.7l.76-2.49A17.94,17.94,0,0,0,12,17a17.94,17.94,0,0,0,2.28-.19L15,19.3a1,1,0,0,0,1,.7h.07a8.31,8.31,0,0,0,5.72-2.71,1.08,1.08,0,0,0,.21-.62A30.79,30.79,0,0,0,20.11,6.25Z"
        fill="#1531f5"
      />
      <path
        id="secondary"
        d="M10.5,10A1.5,1.5,0,1,1,9,8.5,1.5,1.5,0,0,1,10.5,10ZM15,8.5A1.5,1.5,0,1,0,16.5,10,1.5,1.5,0,0,0,15,8.5Z"
        fill="#FFFFFF"
      />
    </svg>
  );
};
