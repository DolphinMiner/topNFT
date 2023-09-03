import AspectRatioDiv from "./Div";

interface IProps {
  dataSrc?: string;
  src?: string;
  alt: string;
  containerClassName?: string;
  imgClassName?: string;
  heightWidthRatio: string;
  style?: React.CSSProperties;
}
export default function AspectImage({
  src,
  alt,
  imgClassName,
  containerClassName,
  heightWidthRatio,
  dataSrc,
  ...otherProps
}: IProps) {
  return (
    <AspectRatioDiv
      rate={`calc(${heightWidthRatio} * 100%)`}
      className={`mx-auto h-auto shrink-0 overflow-hidden${
        containerClassName ? ` ${containerClassName}` : ""
      }`}
      {...otherProps}
    >
      <img
        className={`${
          dataSrc && !imgClassName?.includes("rowlazy") ? "lazy " : ""
        }absolute box-border h-full w-full${
          imgClassName ? ` ${imgClassName}` : ""
        }`}
        {...(dataSrc && { "data-src": dataSrc })}
        {...(src && { src: src })}
        alt={alt}
      />
    </AspectRatioDiv>
  );
}
