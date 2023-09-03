import React from "react";
import { AspectImage } from "@/components/AspectRatioDiv";

interface IProps {
  title?: string;
  subTitle?: string;
  Icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  hasArrow?: boolean;
  titleClassName?: string;
  subTitleClassName?: string;
}

export default function Button({
  title,
  subTitle,
  Icon = null,
  onClick,
  className,
  hasArrow = false,
  titleClassName,
  subTitleClassName,
}: IProps) {
  const titleComp = title && (
    <p
      className={`line-clamp-1 w-full font-TripGeom-Bold text-xl${
        titleClassName ? ` ${titleClassName}` : ""
      }`}
    >
      {title}
    </p>
  );
  const subTitleComp = subTitle ? (
    <p
      className={`line-clamp-1 w-full font-TripGeom-Regular text-[16px]${
        subTitleClassName ? ` ${subTitleClassName}` : ""
      }`}
    >
      {subTitle}
    </p>
  ) : null;

  return (
    <div
      className={`drop-shadow-btn hover:top-btn-hover-top relative inline-block cursor-pointer hover:drop-shadow-none ${
        className ? ` ${className}` : ""
      }`}
      {...(onClick && { onClick })}
    >
      {hasArrow ? (
        <AspectImage
          heightWidthRatio="100/522"
          containerClassName="w-[335px]"
          src="/arrow-button.png"
          alt="arrow-button"
        />
      ) : (
        <AspectImage
          heightWidthRatio="156/848"
          containerClassName="max-w-[424px] desktop:w-[424px]"
          src="/button.png"
          alt="button"
        />
      )}
      <div
        className={`absolute inset-x-0 inset-y-0 flex flex-col items-center justify-center p-[8px] ${
          hasArrow ? " pr-[26px]" : ""
        } text-black`}
      >
        {Icon}
        {titleComp}
        {subTitleComp}
      </div>
    </div>
  );
}
