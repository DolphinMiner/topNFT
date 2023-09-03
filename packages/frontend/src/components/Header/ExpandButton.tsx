type ExpandButtonProps = {
  expand: boolean;
  onToggle: (nextExpand: boolean) => void;
  className?: string;
};
const ExpandButton = ({ expand, onToggle, className }: ExpandButtonProps) => {
  return (
    <button
      type="button"
      onClick={() => {
        onToggle(!expand);
      }}
      className={`h-[36px] w-[34px] ${className || ""}`}
    >
      {expand ? (
        <div className="inline-flex items-center justify-center p-1 text-black">
          <span className="sr-only">Close menu</span>
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-between px-1 py-2">
          <span className="block h-[5px] w-full bg-black"></span>
          <span className="block h-[5px] w-full bg-black"></span>
          <span className="block h-[5px] w-full bg-black"></span>
        </div>
      )}
    </button>
  );
};

export default ExpandButton;
