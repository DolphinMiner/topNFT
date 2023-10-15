type InstagramProps = {
  className?: string;
  width?: number;
  height?: number;
};
export const Instagram = ({
  width = 26,
  height = 26,
  className,
}: InstagramProps) => (
  <svg
    width={`${width}px`}
    height={`${height}px`}
    className={className}
    fill="none"
    viewBox="0 0 48 48"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <rect width={48} height={48} fill="#FFFFFF" fillOpacity={0.01} />
    <path
      d="M34 6H14C9.58172 6 6 9.58172 6 14V34C6 38.4183 9.58172 42 14 42H34C38.4183 42 42 38.4183 42 34V14C42 9.58172 38.4183 6 34 6Z"
      fill="#FFFFFF"
      stroke="#1531f5"
      strokeWidth={4}
      strokeLinejoin="round"
    />
    <path
      d="M24 32C28.4183 32 32 28.4183 32 24C32 19.5817 28.4183 16 24 16C19.5817 16 16 19.5817 16 24C16 28.4183 19.5817 32 24 32Z"
      fill="#FFFFFF"
      stroke="#1531f5"
      strokeWidth={4}
      strokeLinejoin="round"
    />
    <path
      d="M35 15C36.1046 15 37 14.1046 37 13C37 11.8954 36.1046 11 35 11C33.8954 11 33 11.8954 33 13C33 14.1046 33.8954 15 35 15Z"
      fill="#1531f5"
    />
  </svg>
);
