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

  return (
    <div className="fixed left-0 right-0 top-0 m-auto flex h-16 w-full max-w-5xl flex-row flex-nowrap items-center justify-around bg-[#f8f9fa]">
      {MENU.map((text) => (
        <button
          key={text}
          type="button"
          className="relative h-10 w-32 text-lg font-bold text-[#1531f5] hover:bg-blue-50"
          onClick={(e) => {
            e.currentTarget.blur();
            if (NEED_ANCHOR.includes(text as any)) {
              setAnchor(text);
            }
          }}
        >
          {text}
          {anchor === text && NEED_ACTIVE.includes(text as any) ? (
            <img
              src="/activeMenu.png"
              className="absolute -bottom-2"
              alt={`${text}_active`}
            />
          ) : null}
        </button>
      ))}
    </div>
  );
};
