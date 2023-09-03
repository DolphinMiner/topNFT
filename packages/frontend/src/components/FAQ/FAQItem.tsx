import { useState } from "react";
import { imgUrl } from "@/constants/url";
import { t_home } from "@/i18n";

type IProps = {
  isLast: boolean;
  isDesktop: boolean;
  item: any;
};

const FAQItem = ({ isLast, isDesktop, item }: IProps) => {
  const [isOpen, buttonClick] = useState(false);
  const onClick = () => {
    buttonClick(!isOpen);
  };

  return (
    <>
      <div
        className={`left-0 right-0 m-auto max-w-[1160px] rounded-[22px] border-[2px] border-black bg-[#FFE094] md:rounded-[24px] md:border-[3px]`}
      >
        <div
          className="flex cursor-pointer items-center justify-between rounded-[22px] bg-[#FFD266] p-[14.3px] md:rounded-[24px] md:p-[24px]"
          onClick={onClick}
        >
          <div className="flex w-[87%]">
            {isDesktop && (
              <span className="mr-[8px] font-TripGeom-Medium text-[28px] md:font-TripGeom-Bold">
                {t_home("question")}
              </span>
            )}
            <span className="break-words font-TripGeom-Medium text-[19px] md:font-TripGeom-Bold md:text-[28px]">
              {item.Q}
            </span>
          </div>
          <img
            className={`lazy ml-[9.53px] h-[19px] w-[19px] md:h-[24px] md:w-[24px] ${
              isOpen ? "rotate-180" : ""
            }`}
            data-src={`${imgUrl}/FAQ/arrow.png`}
            alt="FAQ-arrow"
          />
        </div>
        {isOpen && (
          <div className="px-[14.3px] py-[9.53px] md:px-[24px] md:pb-[24px] md:pt-[10px]">
            <div className="flex items-baseline">
              {isDesktop && (
                <span className="mr-[8px] font-TripGeom-Bold text-[28px]">
                  {t_home("answer")}
                </span>
              )}
              <span
                className="w-full break-words font-TripGeom-Regular text-[16px] text-black/75 md:text-[20px]"
                dangerouslySetInnerHTML={{ __html: item.A }}
              ></span>
            </div>
          </div>
        )}
      </div>
      {!isLast && (
        <div
          className={`left-0 right-0 m-auto flex max-w-[1160px] justify-between px-[58px] ${
            isDesktop ? "" : "mb-[24px]"
          } `}
        >
          {isDesktop && (
            <>
              <img
                className={`lazy h-[32px] w-[15px]`}
                data-src={`${imgUrl}/FAQ/link.png`}
                alt="FAQ-link1"
              />
              <img
                className={`lazy h-[32px] w-[15px]`}
                data-src={`${imgUrl}/FAQ/link.png`}
                alt="FAQ-link2"
              />
            </>
          )}
        </div>
      )}
    </>
  );
};

export default FAQItem;
