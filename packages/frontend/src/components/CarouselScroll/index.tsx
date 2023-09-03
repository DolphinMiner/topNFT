import React from "react";

interface IProps {
  className?: string;
  children?: React.ReactNode;
  // default: 2
  speed?: number;
  // do not scroll when count <= minScrollCount
  minScrollCount: number;
  // global keyframe name
  keyframeName: string;
  // scroll direction; default: true
  toLeft?: boolean;
}

export default function CarouselScroll({
  className,
  children = [],
  speed = 2,
  minScrollCount,
  keyframeName,
  toLeft = true,
}: IProps) {
  const count = React.Children.count(children);
  const needScroll = count > minScrollCount;

  const maxTransX = Math.round((count - 1) * 100);
  const minTransX = -100;
  const _children = needScroll ? (
    <>
      <style jsx global>
        {`
          @keyframes ${keyframeName} {
            from: {
              transform: translateX(${toLeft ? maxTransX : minTransX}%);
            }
            to: {
              transform: translateX(${toLeft ? minTransX : maxTransX}%);
            }
          }
        `}
      </style>
      {(Array.isArray(children) ? children : [children]).map((child, index) => {
        return (
          child &&
          React.cloneElement(child, {
            className: `carousel-scroll-wrap overflow-hidden ${
              index === 0 ? "relative" : "absolute left-0 top-0"
            } ${child.props.className}`,
            style: {
              animation: `${keyframeName} ${count * speed}s linear infinite ${
                (index - count + 1) * speed
              }s`,
              ...child.props.style,
            },
          })
        );
      })}
    </>
  ) : (
    children
  );

  return (
    <div
      className={`overflow-hidden ${needScroll ? "relative" : "flex"}${
        className ? ` ${className}` : ""
      }`}
    >
      {_children}
    </div>
  );
}
