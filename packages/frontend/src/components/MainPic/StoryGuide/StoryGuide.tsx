import { useEffect, useMemo } from "react";
import i18next from "i18next";
import { t_common } from "@/i18n";
import { onClickAnchorLabel } from "@/utils/onClickAnchorLabel";

const StoryGuide = () => {
  const { language } = i18next;
  const root = useMemo(() => (language ? `/${language}` : ""), [language]);
  useEffect(() => {
    const slip = document.getElementById("story-guide-slip");
    setTimeout(() => {
      slip && slip.setAttribute("style", "display: block;");
    }, 5000);
    const slipAnimation = () => {
      slip?.remove();
      document.removeEventListener("scroll", slipAnimation);
    };
    document.addEventListener("scroll", slipAnimation);
  }, []);

  const jumpToStoryPage = () => {
    window.location.href = `${root}/story`;
  };

  return (
    <div className="absolute bottom-0 z-[2] flex w-full items-end bg-gradient-to-b from-[#0F1519]/0 to-[#3264FF] pb-[34.133px] pl-[21.333px] md:px-[5.625%] md:pb-[8px]">
      <img
        src={"/story-guide/slip.png"}
        alt="story guide slip"
        id="story-guide-slip"
        className="absolute left-0 right-0 top-0 m-auto hidden h-[38.933px] w-[70.399px] animate-story-guide cursor-pointer"
        onClick={() => onClickAnchorLabel("mint")}
      />
      <div className="mr-[8.5333px] h-[94px] overflow-hidden md:mr-[16px]">
        <span className="line-clamp-4 font-TripGeom-Regular text-[32] text-white md:line-clamp-3">
          {t_common("story_guide")}
        </span>
      </div>
      <img
        onClick={jumpToStoryPage}
        src={"/story-guide/mobile_entrance.png"}
        alt="mobile story entrance"
        className="h-[169.06px] w-[104.5333px] cursor-pointer md:hidden"
      />
      <img
        onClick={jumpToStoryPage}
        src={"/story-guide/online_entrance.png"}
        alt="online story entrance"
        className="hidden h-[169.06px] cursor-pointer hover:animate-story-entrance md:block"
      />
    </div>
  );
};

export default StoryGuide;
