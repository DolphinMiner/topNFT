import { imgUrl } from "@/constants/url";

interface WrapProps {
  index: number;
  children: React.ReactNode;
}
function PartnerBenefitItemWrap({ index, children }: WrapProps) {
  const isEven = index % 2 === 0;
  const boardName = `partner-benefit-board-${isEven ? 1 : 2}`;
  return (
    <div
      className={`relative flex w-full items-center justify-center mobile:h-20 mobile:rounded-2xl mobile:bg-lightBorder desktop:w-1/4${
        index !== 0 ? " mobile:mt-3" : ""
      }`}
    >
      <img
        alt={boardName}
        className="lazy mobile:hidden"
        data-src={`${imgUrl}/${boardName}.png`}
      />
      {children}
    </div>
  );
}

interface IProps {
  partnerBenefits: Array<{ name: string; img: string }>;
}
export default function PartnerBenefits({ partnerBenefits }: IProps) {
  return (
    <div className="box-border flex w-full flex-col flex-nowrap desktop:flex-row desktop:justify-between desktop:gap-3">
      {partnerBenefits.map(({ name, img }, index) => (
        <PartnerBenefitItemWrap index={index} key={name}>
          <div className="absolute inset-x-0 inset-y-0 flex flex-row flex-nowrap overflow-hidden bg-transparent mobile:p-3 desktop:flex-col">
            <img
              data-src={`${imgUrl}${img}`}
              alt={name}
              className="lazy mx-auto my-auto box-border aspect-[160/128] w-[28%] mobile:w-16 desktop:mt-5"
            />
            <div className="box-border flex flex-1 items-center text-left font-TripGeom-Bold text-black mobile:pl-3 desktop:px-4 desktop:text-center desktop:text-lg">
              <span className="line-clamp-2">{name}</span>
            </div>
          </div>
        </PartnerBenefitItemWrap>
      ))}
    </div>
  );
}
