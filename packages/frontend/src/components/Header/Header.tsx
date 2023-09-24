import { onClickAnchorLabel } from "@/utils/onClickAnchorLabel";

export const Header = () => {
  return (
    <div className="fixed left-0 right-0 top-0 m-auto flex h-16 w-full max-w-5xl flex-row flex-nowrap items-center justify-around bg-red-50">
      {["Logo", "About", "Roadmap", "Team", "Premint"].map((text) => (
        <button
          key={text}
          type="button"
          className="h-10 w-32 text-lg font-bold text-[#1531f5]"
          onClick={(e) => {
            e.currentTarget.blur();
            onClickAnchorLabel(text);
          }}
        >
          {text}
        </button>
      ))}
    </div>
  );
};
