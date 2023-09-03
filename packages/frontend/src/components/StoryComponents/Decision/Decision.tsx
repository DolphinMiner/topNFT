import { t_story } from "@/i18n";
import { imgUrl } from "@/constants/url";

interface IProps {
  isDesktop: boolean;
}
const Decision = ({ isDesktop }: IProps) => {
  return (
    <>
      {isDesktop ? (
        <div className="left-0 right-0 m-auto max-w-[1080px] px-[70px]">
          <img
            data-src={`${imgUrl}/story-page/title_decision.png`}
            id="decision"
            alt="story page image"
            className="lazy relative left-0 right-0 top-[80px] z-[2] m-auto h-[93px] w-[233.63px]"
          />
          <div className="relative w-full">
            <div className="px-[10px]">
              {/* 背景图片 */}
              <div className="relative -bottom-[40px] z-0 w-full bg-[url('https://static-content.trekki.io/assets/story-page/imageGround_1.png')] bg-contain bg-no-repeat pt-[113%]">
                <img
                  data-src={`${imgUrl}/story-page/image_story_3.1.png`}
                  className="lazy absolute left-[4.456%] top-[4.254%] w-[82.022%]"
                />
                <img
                  data-src={`${imgUrl}/story-page/image_story_3.2.png`}
                  className="lazy absolute right-0 top-[10.26%] w-[25.556%]"
                />
                <img
                  data-src={`${imgUrl}/story-page/image_story_3.3.png`}
                  className="lazy absolute left-[9.659%] top-[42.792%] w-[43.181%]"
                />
                <img
                  data-src={`${imgUrl}/story-page/image_story_3.4.png`}
                  className="lazy absolute right-[7.386%] top-[46.096%] w-[40.34%]"
                />
                <div className="absolute left-0 right-0 top-[74.757%] m-auto w-[86.363%]">
                  <span className="font-AaHuanLeBao text-[#670100]">
                    {t_story("choose_title")}
                  </span>
                  <div className="mb-[14.304px] mt-[15.36px] line-clamp-[4] w-full font-AaHuanLeBao text-[12px] text-[#000101] opacity-[0.6]">
                    {t_story("tripo_quickly_told")}
                  </div>
                  <div className="mt-[28.6px] line-clamp-[2] w-full font-AaHuanLeBao text-[12px] text-[#000101] opacity-[0.6]">
                    {t_story("Many_companions")}
                  </div>
                </div>
              </div>
            </div>
            {/* 卷轴 */}
            <img
              src={`${imgUrl}/story-page/image_reels.png`}
              alt="story page image"
              className="sticky -bottom-[5.4%] z-[1] w-full"
            />
          </div>
        </div>
      ) : (
        <div className="relative -top-[40px] mx-[16.688px]" id="decision">
          <img
            data-src={`${imgUrl}/story-page/title_decision.png`}
            alt="story page image"
            className="lazy relative left-0 right-0 top-[40px] z-[1] m-auto w-[57.142%]"
          />
          {/* h5背景大图 */}
          <div className="relative z-0 w-full bg-[url('https://static-content.trekki.io/assets/story-page/imageGround_h5_1.png')] bg-contain bg-no-repeat pt-[338%]">
            <div className="absolute top-0 px-[14.3px] pt-[59.6px]">
              <div className="px-[14.3px]">
                <span className="font-AaHuanLeBao text-[#670100]">
                  {t_story("choose_title")}
                </span>
                <div className="mb-[14.304px] mt-[15.36px] line-clamp-[8] h-[168.1px] w-full font-Roboto-Medium text-[13px] text-[#111111]">
                  {t_story("tripo_quickly_told")}
                </div>
              </div>
              <img
                data-src={`${imgUrl}/story-page/image_story_h5_3.1.png`}
                alt="story page image"
                className="lazy w-full"
              />
              <div className="mb-[14.3px] mt-[28.6px] line-clamp-[4] h-[90px] w-full px-[14.3px] font-Roboto-Medium text-[13px] text-[#111111]">
                {t_story("Many_companions")}
              </div>
              <img
                data-src={`${imgUrl}/story-page/image_story_h5_3.2.png`}
                alt="story page image"
                className="lazy w-full"
              />
              <img
                data-src={`${imgUrl}/story-page/image_story_h5_3.3.png`}
                alt="story page image"
                className="lazy w-full"
              />
              <img
                data-src={`${imgUrl}/story-page/image_story_h5_3.4.png`}
                alt="story page image"
                className="lazy w-full"
              />
            </div>
          </div>
          <img
            data-src={`${imgUrl}/story-page/image_h5_reels.png`}
            alt="story page image"
            className="lazy absolute -bottom-[10px] z-[1] w-full"
          />
        </div>
      )}
    </>
  );
};

export default Decision;
