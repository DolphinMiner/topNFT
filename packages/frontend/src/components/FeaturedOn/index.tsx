import { imgUrl } from "@/constants/url";
import AspectRatioDiv, { AspectImage } from "@/components/AspectRatioDiv";
import CarouselScroll from "@/components/CarouselScroll";

interface IProps {
  className?: string;
  featured: Array<{
    name: string;
    bg?: string;
    border?: string;
    link: string;
  }>;
  // default false
  hasFrame?: boolean;
  isDesktop?: boolean;
}

const imgPrefix = `${imgUrl}/featured-on`;

function getFeaturedEle(featured: IProps["featured"], isDesktop?: boolean) {
  return featured.map(({ name, bg, border, link }) => (
    <div
      key={name}
      className="desktop:shrink-1 w-1/2 overflow-hidden px-2 desktop:w-[296px] desktop:px-3"
    >
      <AspectRatioDiv
        rate="calc(176/544 * 100%)"
        className="h-auto w-full bg-[length:0px_0px] desktop:rounded-full desktop:border-2"
        style={{
          ...(isDesktop && bg && { backgroundColor: bg }),
          ...(isDesktop && (border || bg) && { borderColor: border || bg }),
        }}
      >
        <a href={link} target="_blank">
          <img
            className="rowlazy box-border h-full w-full"
            data-src={`${imgPrefix}/${name}.png`}
            alt={`featured-on-${name}`}
          />
        </a>
      </AspectRatioDiv>
    </div>
  ));
}

export default function FeaturedOn({ featured, className, isDesktop }: IProps) {
  const inlineMinScrollCount = Math.ceil(window?.innerWidth / 296) || Infinity;
  return (
    <div
      id="featuredOn"
      className={`relative w-full${className ? ` ${className}` : ""}`}
    >
      <AspectImage
        heightWidthRatio="156/662"
        containerClassName="w-[257px]"
        dataSrc={`${imgPrefix}/title.png`}
        alt="featured-title"
      />
      <div className="mt-5 w-full mobile:rounded-2xl mobile:bg-gray-950/[0.16] mobile:px-3 mobile:py-6 desktop:mt-12">
        <CarouselScroll
          className="w-full justify-center"
          minScrollCount={isDesktop ? inlineMinScrollCount : 2}
          keyframeName="featured-on-carousel-ani"
        >
          {getFeaturedEle(featured, isDesktop)}
        </CarouselScroll>
      </div>
    </div>
  );
}
