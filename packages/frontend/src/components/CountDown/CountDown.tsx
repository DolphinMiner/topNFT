import { useCountDown } from "./useCountDown";

const CountNumber = ({ value }: { value: number }) => {
  return (
    <div className="flex h-7 w-12 flex-row items-center justify-center bg-[#fff056] text-lg text-black shadow-md shadow-black">
      <span>{value.toString().padStart(2, "0")}</span>
    </div>
  );
};

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

export const CountDown = ({ endTimestamp }: { endTimestamp: number }) => {
  const distance = useCountDown(endTimestamp);
  const day = Math.floor(distance / DAY);
  const hour = Math.floor((distance % DAY) / HOUR);
  const minute = Math.floor((distance % HOUR) / MINUTE);
  const second = Math.floor((distance % MINUTE) / SECOND);

  return (
    <div className="flex w-52 flex-row justify-between">
      <CountNumber value={day} />
      <CountNumber value={hour} />
      <CountNumber value={minute} />
      <CountNumber value={second} />
    </div>
  );
};
