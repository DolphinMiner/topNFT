import { imgUrl } from "@/constants/url";
import { AspectImage } from "@/components/AspectRatioDiv";

export interface IProps {
  roads: Array<string>;
  stepNow: number;
  isDesktop: boolean;
  className?: string;
}

const imgPrefix = `${imgUrl}/road-map`;

function getItem(
  title: string | React.ReactNode,
  step: number,
  stepNow: number,
  roadCount: number,
) {
  const isStepNow = step === stepNow;
  return (
    <div
      className={`relative pb-[34px] before:absolute before:-left-9 last:pb-0 mobile:ml-8 mobile:pb-[22px] mobile:before:-left-4 ${
        step === 0 ? "before:top-[calc(50%-17px)]" : "before:top-0"
      } ${
        step === roadCount - 1 ? "before:bottom-[calc(50%)]" : "before:bottom-0"
      } before:w-2.5 before:-translate-x-1/2 ${
        step < stepNow ? "before:bg-lineGreenBg" : "before:bg-lineGrayBg"
      } before:content-[''] mobile:before:w-0.5`}
      key={step}
    >
      <div
        className={`${
          isStepNow
            ? "after:absolute after:-left-9 after:bottom-1/2 after:top-0 after:w-2.5 after:-translate-x-1/2 after:bg-lineGreenBg after:content-[''] mobile:after:-left-4 mobile:after:w-0.5 "
            : ""
        }shadow-[0px_0px_0px_3px_black] relative rounded-[18px] border-black bg-nav-bg px-6 py-7 font-TripGeom-Bold text-black before:absolute before:-left-9 before:top-1/2 before:z-[5] before:h-6 before:w-6 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-lineGrayBg before:content-[''] mobile:rounded-[20px] mobile:p-3 mobile:pt-[18px] mobile:font-TripGeom-Medium mobile:shadow-[0px_0px_0px_1.5px_black] mobile:before:-left-4 mobile:before:h-4 mobile:before:w-4 desktop:text-2.5xl`}
      >
        {title}
        {step <= stepNow && (
          <img
            className="lazy absolute -left-9 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 scale-[calc(1/3)] mobile:-left-4 mobile:scale-[calc(7/32)]"
            data-src={`${imgPrefix}/${isStepNow ? "here-h5" : "done"}.png`}
            alt="step done"
          />
        )}
      </div>
      <img
        className="lazy absolute left-6 top-0 -translate-x-1/4 -translate-y-1/2 scale-50 mobile:left-3 mobile:-translate-x-[35%] mobile:scale-[0.3]"
        data-src={`${imgPrefix}/phase-${step + 1}.png`}
        alt={`step-${step}`}
      />
    </div>
  );
}

export default function RoadMap({
  roads,
  stepNow,
  isDesktop,
  className,
}: IProps) {
  const roadCount = roads.length + 1;
  return (
    <div {...(className && { className })} id="roadmap">
      <AspectImage
        heightWidthRatio={isDesktop ? "342/578" : "240/832"}
        alt="featured-title"
        containerClassName="mb-12 w-[285px] mobile:mb-[22px] mobile:w-[208px]"
        dataSrc={`${imgPrefix}/title${isDesktop ? "" : "-h5"}.png`}
      />
      <div>
        {roads.map((road, index) => getItem(road, index, stepNow, roadCount))}
        {getItem(
          <AspectImage
            heightWidthRatio="76/1462"
            containerClassName="desktop:w-1/2"
            dataSrc={`${imgPrefix}/more.png`}
            alt="more road"
          />,
          roadCount - 1,
          stepNow,
          roadCount,
        )}
      </div>
    </div>
  );
}
