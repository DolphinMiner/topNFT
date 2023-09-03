import FAQItem from "./FAQItem";
import { FAQList } from "./FAQList";
import { imgUrl } from "@/constants/url";

interface IProps {
  isDesktop: boolean;
}

const FAQ = ({ isDesktop }: IProps) => {
  return (
    <div className="px-4">
      <div className="left-0 right-0 m-auto mb-[59.6px]">
        <img
          className="lazy left-0 right-0 m-auto mb-[28.6px] h-[61.5px] w-[152.8px] md:mb-[48px]"
          data-src={`${imgUrl}/FAQ/title.png`}
          alt="FAQ-title"
          id="FAQ"
        />
        {FAQList.map((item, index) => (
          <FAQItem
            item={item}
            key={FAQList[index].Q}
            isDesktop={isDesktop}
            isLast={index === FAQList.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
