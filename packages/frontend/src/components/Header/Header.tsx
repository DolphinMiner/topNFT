import { useEffect, useState } from "react";
import { onClickAnchorLabel } from "@/utils/onClickAnchorLabel";

const NEED_ACTIVE = ["ABOUT", "ROADMAP", "UTILITIES", "TEAM", "MINT"] as const;
export const NEED_ANCHOR = ["HOMEPAGE", ...NEED_ACTIVE] as const;
const MENU = [...NEED_ACTIVE] as const;

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
        className="relative h-10 w-32 text-lg font-bold text-white"
        onClick={(e) => {
          e.currentTarget.blur();
          if (NEED_ANCHOR.includes(item as any)) {
            setAnchor(item);
          }
        }}
      >
        <span className="[text-shadow:_0_5px_5px_black]">{item}</span>
        {anchor === item && NEED_ACTIVE.includes(item as any) ? (
          <div className="absolute -bottom-2 px-7">
            <img
              src="/activeMenu.jpg"
              className="block h-full w-full"
              alt={`${item}_active`}
            />
          </div>
        ) : null}
      </button>
    );
  };

  return (
    <div className="fixed left-0 right-0 top-0 m-auto box-content flex h-24 w-full max-w-5xl flex-row flex-nowrap items-center justify-around bg-inherit">
      <div
        className="h-20 flex-shrink-0 cursor-pointer"
        onClick={(e) => {
          e.currentTarget.blur();
          setAnchor("HOMEPAGE");
        }}
      >
        <img className="block h-full w-full" src="/logo.jpg" alt="logo" />
      </div>
      {MENU.map((text) => {
        return renderMenuItem(text);
      })}
    </div>
  );
};
