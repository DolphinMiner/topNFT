export const onClickAnchorLabel = (anchor: string) => {
  const anchorElement = document.querySelector(
    `#${anchor}`,
  ) as HTMLAnchorElement | null;
  const offsetHeight = 92;
  if (anchorElement) {
    window.scrollTo({
      behavior: "smooth",
      top: anchorElement.offsetTop - offsetHeight,
    });
  }
};
