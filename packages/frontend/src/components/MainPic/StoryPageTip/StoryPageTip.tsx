import { imgUrl } from "@/constants/url";

const StoryPageTip = () => {
  return (
    <div className="absolute bottom-0 z-[2] flex h-[50%] w-full items-end bg-gradient-to-b from-[#3264ff]/0 to-[#3264FF]">
      <img
        src={`${imgUrl}/story-page/image_down.png`}
        className="left-0 right-0 mx-auto w-[575px]"
      />
    </div>
  );
};

export default StoryPageTip;
