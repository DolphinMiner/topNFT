import cls from "classnames";
import { useState } from "react";
import { CountDown } from "../CountDown";

export const Mint = () => {
  const price = 0.05;
  const [count, setCount] = useState(1);

  return (
    <div className="flex w-full flex-col items-center justify-around px-16">
      <div className="flex h-full w-[1024px] flex-row items-center justify-between">
        <div className="h-[300px] w-[300px] shadow-lg shadow-black">
          <img
            className="block h-full w-full"
            src="/mintAvatar0.png"
            alt="mint-avatar0"
          />
        </div>

        <div className="flex flex-col items-center">
          <div className="mb-8 text-4xl text-[#fff056] [text-shadow:_0_2px_4px_black]">
            COLLECT YOUR NFT BEFORE END
          </div>
          <div className="mb-6 flex h-[90px] w-[700px] flex-row items-center rounded-[45px] px-[60px] text-2xl text-[#fff056] shadow-md shadow-black">
            <div className="[text-shadow:_0_2px_4px_black]">PUBLIC</div>
            <div className="ml-auto mr-4 [text-shadow:_0_2px_4px_black]">
              ENDS IN
            </div>
            <CountDown
              endTimestamp={new Date("2023/11/28 20:17:00").getTime()}
            />
          </div>
          <div className="mb-1 flex h-[48px] w-[420px] flex-row items-center justify-between px-1 text-xl text-[#fff056] shadow shadow-black">
            <div>Total minted</div>
            <div className="ml-auto">2455 | 5555</div>
          </div>

          <div className="mb-1 flex h-[48px] w-[420px] flex-row items-center justify-between px-1 text-xl text-[#fff056] shadow shadow-black">
            <div>Price</div>
            <div className="ml-auto">{`${price} ETH`}</div>
          </div>

          <div className="mb-1 flex h-[48px] w-[420px] flex-row items-center justify-between px-1 text-xl text-[#fff056] shadow shadow-black">
            <div>Quantity</div>
            <div className="ml-8 mr-auto flex h-full flex-row flex-nowrap">
              <div
                className={cls([
                  "flex h-full w-9 cursor-pointer flex-row items-center justify-center bg-[#fff056] text-black",
                  {
                    "cursor-pointer": count > 1,
                    "cursor-not-allowed": count <= 1,
                  },
                ])}
                onClick={() => {
                  if (count > 1) {
                    setCount((prevCount) => prevCount - 1);
                  }
                }}
              >
                <span>-</span>
              </div>
              <div className="flex h-full w-9 flex-row items-center justify-center text-[#fff056]">
                <span>{count}</span>
              </div>
              <div
                className={cls([
                  "flex h-full w-9 flex-row items-center justify-center bg-[#fff056] text-black",
                  {
                    "cursor-pointer": count < 10,
                    "cursor-not-allowed": count >= 10,
                  },
                ])}
                onClick={() => {
                  if (count < 10) {
                    setCount((prevCount) => prevCount + 1);
                  }
                }}
              >
                <span>+</span>
              </div>
            </div>
            <div>{`${Number((price * count).toFixed(3))} ETH`}</div>
          </div>

          <div className="mt-[40px] flex h-[48px] w-[190px] cursor-pointer flex-row items-center justify-center bg-[#fff056] text-xl font-bold text-black">
            <span>MINT NOW</span>
          </div>
        </div>
      </div>
    </div>
  );
};
