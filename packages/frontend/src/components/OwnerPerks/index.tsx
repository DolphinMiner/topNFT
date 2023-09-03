import React from "react";
import { imgUrl } from "@/constants/url";
import AutoEllipsis from "@/components/AutoEllipsis";
import { t_home } from "@/i18n";
import { AspectImage } from "@/components/AspectRatioDiv";

interface IProps {
  className?: string;
  // default: true
  isDesktop?: boolean;
}

export default function OwnerPerks({ className, isDesktop = true }: IProps) {
  const imgPrefix = `${imgUrl}/owner-perks/`;
  const ownerPerks = [...Array(6)].map((_, index) => ({
    title: t_home(`owner_perks_${index}_title`),
    describe: t_home(`owner_perks_${index}_describe`),
    img: `${imgPrefix}${index}${isDesktop ? "" : "-h5"}.png`,
  }));

  return (
    <div
      id="perks"
      className={`w-full font-TripGeom-Regular${
        className ? ` ${className}` : ""
      }`}
    >
      <AspectImage
        heightWidthRatio={isDesktop ? "238/754" : "242/1012"}
        alt="owner-perks"
        containerClassName="mb-4 w-[253px] desktop:mb-12 desktop:w-[345px]"
        dataSrc={`${imgPrefix}owner-perks${isDesktop ? "" : "-h5"}.png`}
      />
      <div className="w-full flex-wrap gap-y-3 desktop:-ml-4 desktop:flex desktop:w-[calc(100%+1rem)] desktop:gap-y-6">
        {ownerPerks.map(({ title, describe, img }, index) => (
          <div key={index} className="mobile:mb-3 desktop:w-1/3 desktop:pl-4">
            <div className="relative rounded-3xl bg-white p-px text-black mobile:w-full desktop:h-full">
              {isDesktop ? (
                <img
                  className="lazy aspect-[370/208] w-full rounded-3xl rounded-l-3xl bg-img-bk"
                  data-src={img}
                  alt={title}
                />
              ) : (
                <AspectImage
                  heightWidthRatio="1"
                  containerClassName="w-1/2 rounded-l-3xl bg-img-bk ml-0"
                  imgClassName="rounded-l-3xl"
                  dataSrc={img}
                  alt={title}
                />
              )}
              <div className="inset-y-0 right-0 flex-col overflow-hidden p-2 mobile:absolute mobile:flex mobile:w-1/2">
                <p className="line-clamp-2 shrink-0 font-MouldyCheese-Regular mobile:font-TripGeom-Bold desktop:text-2.5xl">
                  {title}
                </p>
                {isDesktop ? (
                  <p className="mt-2 line-clamp-3 font-TripGeom-Regular">
                    {describe}
                  </p>
                ) : (
                  <AutoEllipsis
                    text={describe}
                    placeHolderClassName="grow text-xs mt-2"
                  />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <AspectImage
        heightWidthRatio="68/1106"
        containerClassName="desktop:mt-12 desktop:w-1/2"
        dataSrc={`${imgPrefix}more.png`}
        alt="owner-perks-more"
      />
    </div>
  );
}
