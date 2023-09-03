import { useState } from "react";
import { imgUrl } from "@/constants/url";

function Carousel() {
  const [isUpRunning, changeUpState] = useState("carousel-running");
  const [isDownRunning, changeDownState] = useState("carousel-running");
  const onMouseUpEnter = () => {
    changeUpState("carousel-pause");
  };
  const onMouseUpLeave = () => {
    changeUpState("carousel-running");
  };
  const onMouseDownEnter = () => {
    changeDownState("carousel-pause");
  };
  const onMouseDownLeave = () => {
    changeDownState("carousel-running");
  };
  return (
    <div className="mx-auto max-w-[2800px] overflow-hidden">
      <div
        className="relative h-carousel-item w-full"
        onMouseEnter={() => onMouseUpEnter()}
        onMouseLeave={() => onMouseUpLeave()}
      >
        <img
          data-src={`${imgUrl}/carousel/1.png`}
          alt="trekki carousel item"
          className={`rowlazy carousel-delay1 absolute h-carousel-item w-carousel-item animate-up-carousel rounded-carousel-item border-carousel-item border-black ${isUpRunning}`}
        />
        <img
          data-src={`${imgUrl}/carousel/2.png`}
          alt="trekki carousel item"
          className={`rowlazy carousel-delay2 absolute h-carousel-item w-carousel-item animate-up-carousel rounded-carousel-item border-carousel-item border-black ${isUpRunning}`}
        />
        <img
          data-src={`${imgUrl}/carousel/3.png`}
          alt="trekki carousel item"
          className={`rowlazy carousel-delay3 absolute h-carousel-item w-carousel-item animate-up-carousel rounded-carousel-item border-carousel-item border-black ${isUpRunning}`}
        />
        <img
          data-src={`${imgUrl}/carousel/4.png`}
          alt="trekki carousel item"
          className={`rowlazy carousel-delay4 absolute h-carousel-item w-carousel-item animate-up-carousel rounded-carousel-item border-carousel-item border-black ${isUpRunning}`}
        />
        <img
          data-src={`${imgUrl}/carousel/5.png`}
          alt="trekki carousel item"
          className={`rowlazy carousel-delay5 absolute h-carousel-item w-carousel-item animate-up-carousel rounded-carousel-item border-carousel-item border-black ${isUpRunning}`}
        />
        <img
          data-src={`${imgUrl}/carousel/6.png`}
          alt="trekki carousel item"
          className={`rowlazy carousel-delay6 absolute h-carousel-item w-carousel-item animate-up-carousel rounded-carousel-item border-carousel-item border-black ${isUpRunning}`}
        />
        <img
          data-src={`${imgUrl}/carousel/7.png`}
          alt="trekki carousel item"
          className={`rowlazy carousel-delay7 absolute h-carousel-item w-carousel-item animate-up-carousel rounded-carousel-item border-carousel-item border-black ${isUpRunning}`}
        />
        <img
          data-src={`${imgUrl}/carousel/16.png`}
          alt="trekki carousel item"
          className={`rowlazy carousel-delay8 absolute h-carousel-item w-carousel-item animate-up-carousel rounded-carousel-item border-carousel-item border-black ${isUpRunning}`}
        />
        <img
          data-src={`${imgUrl}/carousel/20.png`}
          alt="trekki carousel item"
          className={`rowlazy carousel-delay9 absolute h-carousel-item w-carousel-item animate-up-carousel rounded-carousel-item border-carousel-item border-black ${isUpRunning}`}
        />
        <img
          data-src={`${imgUrl}/carousel/18.png`}
          alt="trekki carousel item"
          className={`rowlazy absolute h-carousel-item w-carousel-item animate-up-carousel rounded-carousel-item border-carousel-item border-black ${isUpRunning}`}
        />
      </div>
      <div
        className="relative mt-3 h-carousel-item w-full mobile:hidden"
        onMouseEnter={() => onMouseDownEnter()}
        onMouseLeave={() => onMouseDownLeave()}
      >
        <img
          data-src={`${imgUrl}/carousel/8.png`}
          alt="trekki carousel item"
          className={`rowlazy carousel-delay1 absolute h-carousel-item w-carousel-item animate-down-carousel rounded-carousel-item border-carousel-item border-black ${isDownRunning}`}
        />
        <img
          data-src={`${imgUrl}/carousel/9.png`}
          alt="trekki carousel item"
          className={`rowlazy carousel-delay2 absolute h-carousel-item w-carousel-item animate-down-carousel rounded-carousel-item border-carousel-item border-black ${isDownRunning}`}
        />
        <img
          data-src={`${imgUrl}/carousel/10.png`}
          alt="trekki carousel item"
          className={`rowlazy carousel-delay3 absolute h-carousel-item w-carousel-item animate-down-carousel rounded-carousel-item border-carousel-item border-black ${isDownRunning}`}
        />
        <img
          data-src={`${imgUrl}/carousel/11.png`}
          alt="trekki carousel item"
          className={`rowlazy carousel-delay4 absolute h-carousel-item w-carousel-item animate-down-carousel rounded-carousel-item border-carousel-item border-black ${isDownRunning}`}
        />
        <img
          data-src={`${imgUrl}/carousel/12.png`}
          alt="trekki carousel item"
          className={`rowlazy carousel-delay5 absolute h-carousel-item w-carousel-item animate-down-carousel rounded-carousel-item border-carousel-item border-black ${isDownRunning}`}
        />
        <img
          data-src={`${imgUrl}/carousel/13.png`}
          alt="trekki carousel item"
          className={`rowlazy carousel-delay6 absolute h-carousel-item w-carousel-item animate-down-carousel rounded-carousel-item border-carousel-item border-black ${isDownRunning}`}
        />
        <img
          data-src={`${imgUrl}/carousel/14.png`}
          alt="trekki carousel item"
          className={`rowlazy carousel-delay7 absolute h-carousel-item w-carousel-item animate-down-carousel rounded-carousel-item border-carousel-item border-black ${isDownRunning}`}
        />
        <img
          data-src={`${imgUrl}/carousel/15.png`}
          alt="trekki carousel item"
          className={`rowlazy carousel-delay8 absolute h-carousel-item w-carousel-item animate-down-carousel rounded-carousel-item border-carousel-item border-black ${isDownRunning}`}
        />
        <img
          data-src={`${imgUrl}/carousel/19.png`}
          alt="trekki carousel item"
          className={`rowlazy carousel-delay9 absolute h-carousel-item w-carousel-item animate-down-carousel rounded-carousel-item border-carousel-item border-black ${isDownRunning}`}
        />
        <img
          data-src={`${imgUrl}/carousel/17.png`}
          alt="trekki carousel item"
          className={`rowlazy absolute h-carousel-item w-carousel-item animate-down-carousel rounded-carousel-item border-carousel-item border-black ${isDownRunning}`}
        />
      </div>
    </div>
  );
}

export default Carousel;
