import { useEffect, useRef, useState } from "react";
import Ellipsis from "react-ellipsis-component";

interface IProps {
  text: string;
  placeHolderClassName?: string;
}
export default function AutoEllipsis({ text, placeHolderClassName }: IProps) {
  const [maxHeight, setMaxHeight] = useState(0);
  const placeholderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ele = placeholderRef.current;
    if (ele) {
      if (typeof ele.getBoundingClientRect === "function") {
        const { height } = ele.getBoundingClientRect() || {};
        setMaxHeight(height || 0);
      }
    }
  }, []);

  return (
    <div ref={placeholderRef} className={placeHolderClassName}>
      {maxHeight ? (
        <Ellipsis ellipsis text={text} maxHeight={maxHeight} />
      ) : null}
    </div>
  );
}
