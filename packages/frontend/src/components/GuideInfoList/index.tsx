export type TypeGuideInfo = Array<{
  title: string;
  subTitle?: string;
  images?: Array<string>;
  children?: Array<{ title: string; images?: Array<string> }>;
}>;

interface IProps {
  guideInfoList: TypeGuideInfo;
  className?: string;
}

export default function GuideInfoList({ guideInfoList, className }: IProps) {
  function renderGuideImages(images?: Array<string>) {
    return (
      (images &&
        images.map((img, index) => (
          <img className="mt-1" key={index} alt={img} src={img} />
        ))) ||
      null
    );
  }

  return (
    <div
      className={`max-w-[638px] overflow-auto desktop:h-cooperation-dialog font-TripGeom-Regular${
        className ? ` ${className}` : ""
      }`}
    >
      {guideInfoList.map(({ title, subTitle, children, images }, index) => (
        <div key={index} className={index === 0 ? "" : "mt-6"}>
          <div className="flex items-baseline">
            <span className="mr-1 font-MouldyCheese-Regular text-2xl">
              {index + 1}.
            </span>
            <div>
              <p className="mb-1 font-TripGeom-Regular">{title}</p>
              {subTitle && <p className="mb-1 text-sm">{subTitle}</p>}
            </div>
          </div>
          {renderGuideImages(images)}
          {children && (
            <ul>
              {children.map(({ title, images }, index) => (
                <li key={index} className="mt-6">
                  <p className="relative ml-5 text-sm before:absolute before:-left-3 before:top-2 before:inline-block before:h-1 before:w-1 before:rounded-[45%] before:bg-black">
                    {title}
                  </p>
                  {renderGuideImages(images)}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
