const BACKGROUND_COLORS: Record<string, string[]> = {
  "#FFD266": ["#FFD266", "rgb(255, 210, 102)"],
  "#3264FF": ["#3264FF", "rgb(50, 100, 255)"],
};

const setBgColor = (bgColor: string) => {
  const body = document.querySelector("body");
  const originBgColor = (body ? body.style.backgroundColor : "") || "";

  if (!(BACKGROUND_COLORS[bgColor] || []).includes(originBgColor)) {
    body && (body.style.backgroundColor = bgColor);
  }
};

export default setBgColor;
