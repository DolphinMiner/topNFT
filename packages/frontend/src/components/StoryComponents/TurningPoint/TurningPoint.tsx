import { t_story } from "@/i18n";
import { imgUrl } from "@/constants/url";

interface IProps {
  isDesktop: boolean;
}

const TurningPoint = ({ isDesktop }: IProps) => {
  return (
    <>
      {isDesktop ? (
        <div className="left-0 right-0 m-auto max-w-[1080px] px-[70px]">
          <img
            data-src={`${imgUrl}/story-page/title_turningPoint.png`}
            id="turningPoint"
            alt="story page image"
            className="lazy relative left-0 right-0 top-[80px] z-[2] m-auto h-[93px] w-[233.63px]"
          />
          <div className="relative w-full">
            <div className="px-[10px]">
              {/* 背景大图 */}
              <div className="relative -bottom-[40px] z-0 w-full bg-[url('https://static-content.trekki.io/assets/story-page/imageGround_2.png')] bg-contain bg-no-repeat pt-[80%]">
                <img
                  data-src={`${imgUrl}/story-page/image_story_2.1.png`}
                  className="lazy absolute left-0 right-0 top-[8.528%] mx-auto w-[90.909%]"
                />
                <div className="absolute left-0 right-0 top-[77.825%] m-auto w-[86.363%]">
                  <span className="font-AaHuanLeBao text-[#670100]">
                    {t_story("entrance_title")}
                  </span>
                  <div className="mt-[23px] line-clamp-[3] w-full font-AaHuanLeBao text-[12px] text-[#000101] opacity-[0.6]">
                    {t_story("suddenly_one_day")}
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
        <div className="relative -top-[60px] mx-[19px]" id="turningPoint">
          <img
            data-src={`${imgUrl}/story-page/title_turningPoint.png`}
            alt="story page image"
            className="lazy relative left-0 right-0 top-[60.64px] z-[2] m-auto w-[57.142%]"
          />
          <img
            alt="story page image"
            data-src={`${imgUrl}/story-page/image_h5_reels.png`}
            className="lazy relative top-[18px] z-[1] w-full"
          />
          {/* h5背景图 */}
          <div className="relative z-0 w-full bg-[url('https://static-content.trekki.io/assets/story-page/imageGround_h5_2.png')] bg-contain bg-no-repeat pt-[117%]">
            <div className="absolute top-0 px-[14.3px] pt-[34px]">
              <div className="px-[14.3px]">
                <span className="font-AaHuanLeBao text-[#670100]">
                  {t_story("entrance_title")}
                </span>
                <div className="mb-[9.304px] mt-[4px] line-clamp-[6] min-h-[109px] w-full font-Roboto-Medium text-[13px] text-[#111111]">
                  {t_story("suddenly_one_day")}
                </div>
              </div>
              <img
                data-src={`${imgUrl}/story-page/image_story_h5_2.1.png`}
                alt="story page image"
                className="lazy w-full"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TurningPoint;
