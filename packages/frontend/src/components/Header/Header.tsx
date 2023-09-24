import { useEffect, useState } from "react";
import { onClickAnchorLabel } from "@/utils/onClickAnchorLabel";

const NEED_ACTIVE = ["About", "Roadmap", "Team"] as const;
export const NEED_ANCHOR = ["Logo", ...NEED_ACTIVE] as const;
const MENU = [...NEED_ANCHOR, "Premint"] as const;

export const Header = () => {
  const [anchor, setAnchor] = useState(() => {
    return "Logo";
  });

  useEffect(() => {
    if (anchor) {
      onClickAnchorLabel(anchor);
    }
  }, [anchor]);

  const renderMenuItem = (item: string) => {
    return (
      <button
        key={item}
        type="button"
        className="relative h-10 w-32 text-lg font-bold text-[#1531f5] hover:bg-blue-50"
        onClick={(e) => {
          e.currentTarget.blur();
          if (NEED_ANCHOR.includes(item as any)) {
            setAnchor(item);
          }
        }}
      >
        {item}
        {anchor === item && NEED_ACTIVE.includes(item as any) ? (
          <img
            src="/activeMenu.png"
            className="absolute -bottom-2"
            alt={`${item}_active`}
          />
        ) : null}
      </button>
    );
  };

  const renderPremint = (item: string) => {
    return (
      <button
        key={item}
        type="button"
        className="relative h-10 w-32 rounded-md bg-[#1531f5] text-lg font-bold text-white hover:opacity-90"
        onClick={(e) => {
          e.currentTarget.blur();
          console.log("premint");
        }}
      >
        {item}
      </button>
    );
  };

  return (
    <div className="fixed left-0 right-0 top-0 m-auto flex h-16 w-full max-w-5xl flex-row flex-nowrap items-center justify-around bg-[#f8f9fa]">
      {MENU.map((text) => {
        if (text === "Premint") return renderPremint(text);

        return renderMenuItem(text);
      })}
    </div>
  );
};
