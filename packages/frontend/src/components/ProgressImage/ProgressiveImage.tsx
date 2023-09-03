import React, { useEffect } from "react";

const ProgressiveImg = (
  props: React.ImgHTMLAttributes<HTMLImageElement> & {
    lowQualitySrc: string;
    highQualitySrc: string;
    imgStyle?: React.CSSProperties;
  },
) => {
  const { lowQualitySrc, highQualitySrc, imgStyle, ...otherProperties } = props;

  useEffect(() => {
    const highQuality = document.getElementById("highQuality") as HTMLElement;
    highQuality.onload = function () {
      highQuality.style.opacity = "1";
    };
  }, []);

  return (
    <div className="relative">
      <img
        {...otherProperties}
        src={lowQualitySrc}
        {...(imgStyle && { style: imgStyle })}
        alt="low quality img"
      />
      <img
        {...otherProperties}
        id="highQuality"
        src={highQualitySrc}
        style={{
          position: "absolute",
          opacity: 0,
          transition: "opacity 1s linear",
          zIndex: 1,
        }}
        alt="hight quality img"
      />
    </div>
  );
};

export default ProgressiveImg;
