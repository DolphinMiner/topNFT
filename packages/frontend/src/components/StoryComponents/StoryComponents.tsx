import { useEffect } from "react";
import Decision from "./Decision";
import TurningPoint from "./TurningPoint";
import Origin from "./Origin";
import Exploration from "./Exploration";
import { generalImgLazyLoading } from "@/utils/imgLazyLoading";
import { imgUrl } from "@/constants/url";

interface IProps {
  isDesktop: boolean;
}

const StoryComponents = ({ isDesktop }: IProps) => {
  useEffect(() => {
    generalImgLazyLoading();
  }, [isDesktop]);
  return (
    <>
      {!isDesktop && (
        <img
          src={`${imgUrl}/story-page/image_h5_down.png`}
          className="left-0 right-0 m-auto my-[59.6px] h-[88.2px] w-[295px]"
        />
      )}
      <Origin isDesktop={isDesktop} />
      <TurningPoint isDesktop={isDesktop} />
      <Decision isDesktop={isDesktop} />
      <Exploration isDesktop={isDesktop} />
      <div className={`${isDesktop ? "h-[144px]" : "h-[24px]"}`} />
    </>
  );
};

export default StoryComponents;
