import { useEffect, useState } from "react";

export const useCountDown = (endTimestamp: number) => {
  const [distance, setDistance] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nowTimestamp = new Date().getTime();
      const distance = endTimestamp - nowTimestamp;
      if (distance >= 0) {
        setDistance(distance);
      }
      if (distance <= 0) {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [endTimestamp]);

  return distance;
};
