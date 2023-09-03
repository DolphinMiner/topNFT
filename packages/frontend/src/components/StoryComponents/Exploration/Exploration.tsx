import { t_story } from "@/i18n";
import { imgUrl } from "@/constants/url";

interface IProps {
  isDesktop: boolean;
}
const Exploration = ({ isDesktop }: IProps) => {
  return (
    <>
      {isDesktop ? (
        <div className="left-0 right-0 m-auto max-w-[1080px] px-[70px]">
          <img
            data-src={`${imgUrl}/story-page/title_exploration.png`}
            id="exploration"
            alt="story page image"
            className="lazy relative left-0 right-0 top-[80px] z-[2] m-auto h-[93px] w-[233.63px]"
          />
          <div className="relative w-full">
            <div className="px-[10px]">
              {/* 背景大图 */}
              <div
                className={`relative -bottom-[40px] z-0 w-full bg-[url('https://static-content.trekki.io/assets/story-page/imageGround_2.png')] bg-contain bg-no-repeat pt-[80%]`}
              >
                <img
                  data-src={`${imgUrl}/story-page/image_story_4.1.png`}
                  className="lazy absolute left-0 right-0 top-[8.528%] mx-auto w-[90.909%]"
                />
                <div className="absolute left-0 right-0 top-[75.825%] m-auto w-[86.363%]">
                  <span className="font-AaHuanLeBao text-[#670100]">
                    {t_story("setout_title")}
                  </span>
                  <div className="mt-[18px] line-clamp-[5] w-full font-AaHuanLeBao text-[12px] text-[#000101] opacity-[0.6]">
                    {t_story("after_several_days")}
                  </div>
                </div>
              </div>
            </div>
            {/* 滚动卷轴 */}
            <img
              src={`${imgUrl}/story-page/image_reels.png`}
              alt="story page image"
              className="sticky -bottom-[5.4%] z-[1] w-full"
            />
          </div>
        </div>
      ) : (
        <div className="relative -top-[30px] mx-[19px]" id="exploration">
          <img
            data-src={`${imgUrl}/story-page/title_exploration.png`}
            alt="story page image"
            className="lazy relative left-0 right-0 top-[45.64px] z-[2] m-auto w-[57.142%]"
          />
          {/* h5背景图 */}
          <div className="relative z-0 w-full bg-[url('https://static-content.trekki.io/assets/story-page/imageGround_h5_4.png')] bg-contain bg-no-repeat pt-[138%]">
            <div className="absolute top-0 px-[14.3px] pt-[54px]">
              <div className="px-[14.3px]">
                <span className="font-AaHuanLeBao text-[#670100]">
                  {t_story("setout_title")}
                </span>
                <div className="mb-[10.304px] mt-[4px] line-clamp-[11] h-[194px] w-full font-Roboto-Medium text-[13px] leading-[18px] text-[#111111]">
                  {t_story("after_several_days")}
                </div>
              </div>
              <img
                data-src={`${imgUrl}/story-page/image_story_h5_4.1.png`}
                alt="story page image"
                className="lazy w-full"
              />
            </div>
          </div>
          <img
            data-src={`${imgUrl}/story-page/image_h5_reels.png`}
            alt="story page image"
            className="lazy absolute -bottom-[18px] z-[1] w-full"
          />
        </div>
      )}
    </>
  );
};

export default Exploration;
