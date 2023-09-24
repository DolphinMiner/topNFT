export const onClickAnchorLabel = (anchor: string) => {
  const anchorElement = document.querySelector(
    `#${anchor}`,
  ) as HTMLAnchorElement | null;
  const offsetHeight = 64;
  if (anchorElement) {
    window.localStorage.setItem("anchor", anchor);
    window.scrollTo({
      behavior: "smooth",
      top: anchorElement.offsetTop - offsetHeight,
    });
  }
};
