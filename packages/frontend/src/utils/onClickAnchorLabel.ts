import { HEADER_HEIGHT } from "@/constants/css";

export const onClickAnchorLabel = (
  anchor: string,
  offsetHeight: number = HEADER_HEIGHT,
) => {
  const anchorElement = document.querySelector(
    `#${anchor}`,
  ) as HTMLAnchorElement | null;
  if (anchorElement) {
    window.localStorage.setItem("anchor", anchor);
    window.scrollTo({
      behavior: "smooth",
      top: anchorElement.offsetTop - offsetHeight,
    });
  }
};
