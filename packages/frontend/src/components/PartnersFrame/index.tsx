import { imgUrl } from "@/constants/url";
import AspectRatioDiv from "@/components/AspectRatioDiv";
import CarouselScroll from "@/components/CarouselScroll";

interface IProps {
  className?: string;
  partners: Array<string>;
  // default false
  isColFour?: boolean;
}

function getPartnersEle(partners: IProps["partners"]) {
  return partners.map((name) => (
    <AspectRatioDiv
      key={name}
      rate="calc(216/386 * 100%)"
      className="h-auto w-1/2 shrink-0 overflow-hidden desktop:mx-auto"
    >
      <img
        className="rowlazy box-border h-full w-full"
        data-src={`${imgUrl}/partner-logo/${name}.png`}
        alt={`partner-${name}`}
      />
    </AspectRatioDiv>
  ));
}

export default function PartnersFrame({
  partners,
  className,
  isColFour,
}: IProps) {
  return (
    <div className={`relative w-full${className ? ` ${className}` : ""}`}>
      <div
        className={`grid ${isColFour ? "grid-cols-c4" : "grid-cols-c2"} gap-6`}
      >
        {getPartnersEle(partners).map((item, index) => (
          <div className="rounded-3xl bg-white/[0.1]" key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export function H5PartnersFrame({ partners, className }: IProps) {
  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl bg-white/[0.1] px-3 py-2${
        className ? ` ${className}` : ""
      }`}
    >
      <CarouselScroll
        className="w-full"
        minScrollCount={2}
        keyframeName="partner-carousel-ani"
      >
        {getPartnersEle(partners)}
      </CarouselScroll>
    </div>
  );
}
