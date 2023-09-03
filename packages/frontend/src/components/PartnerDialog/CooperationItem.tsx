import { imgUrl } from "@/constants/url";

interface ItemProps {
  Icon: string;
  title: string;
}

const CooperationItem = ({ Icon, title }: ItemProps) => {
  return (
    <div className="h-cooperation-xs rounded-3xl bg-cooperationItem-bg p-2 text-center text-xs text-black mobile:w-auto desktop:w-36">
      <img
        src={`${imgUrl}/cooperation_${Icon}.png`}
        className="m-auto mb-2 h-8 w-10"
        alt={title}
      />
      <p className="font-TripGeom-Regular">{title}</p>
    </div>
  );
};

export default CooperationItem;
