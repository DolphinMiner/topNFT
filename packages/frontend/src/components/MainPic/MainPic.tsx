import ProgressiveImage from "../ProgressImage";
// import StoryGuide from "./StoryGuide";
// import StoryPageTip from "./StoryPageTip";
import { imgUrl } from "@/constants/url";

interface IProps {
  isDesktop: boolean;
  page?: string;
}

function MainPic({ isDesktop, page }: IProps) {
  const IsBigMobile = !isDesktop && window.innerHeight > 667;
  const IsSmallMobile = !isDesktop && window.innerHeight <= 667;
  return (
    // 加width100%的div，防止在微信浏览器上变形
    <div className="w-screen overflow-hidden opacity-100">
      {isDesktop && (
        /* for desktop */
        <ProgressiveImage
          className="min-w-screen overlay-item bottom-0 left-0 top-0 h-screen w-full transform object-cover object-center"
          lowQualitySrc={"/head_pic_pc_blur.png"}
          highQualitySrc={`${imgUrl}/head_pic_pc.png`}
          alt="main picture"
          imgStyle={{ maxHeight: "-webkit-fill-available" }}
        />
      )}
      {IsBigMobile && (
        /* for big mobile */
        <ProgressiveImage
          className="min-w-screen overlay-item bottom-0 left-0 top-0 h-screen w-full transform object-cover object-top"
          lowQualitySrc={"/head_pic_big_mobile_blur.png"}
          highQualitySrc={`${imgUrl}/head_pic_big_mobile.png`}
          alt="main picture"
          imgStyle={{ maxHeight: "-webkit-fill-available" }}
        />
      )}
      {IsSmallMobile && (
        /* for small mobile */
        <ProgressiveImage
          className="overlay-item bottom-0 h-screen w-full transform object-cover object-center"
          lowQualitySrc={"/head_pic_small_mobile_blur.png"}
          highQualitySrc={`${imgUrl}/head_pic_small_mobile.png`}
          alt="main picture"
          imgStyle={{ maxHeight: "-webkit-fill-available" }}
        />
      )}
      {/* {page === "home" && <StoryGuide />} */}
      {/* {page === "story" && <StoryPageTip />} */}
    </div>
  );
}

export default MainPic;
