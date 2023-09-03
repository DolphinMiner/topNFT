const isInViewport = (el?: HTMLElement | null) => {
  if (!el) return false;

  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

// 根据Y轴判断是否在可视区
export const isInYViewport = (el?: HTMLElement | null) => {
  if (!el) return false;
  const rect = el.getBoundingClientRect();
  const viewportHeight =
    window.innerHeight || document.documentElement.clientHeight;
  // 上缘在可视区
  if (rect.top >= 0 && Math.floor(rect.top) < viewportHeight) return true;
  // 下缘在可视区
  if (rect.bottom > 0 && Math.floor(rect.bottom) <= viewportHeight) return true;
  // 主体在可视区
  if (rect.top < 0 && Math.floor(rect.bottom) > viewportHeight) return true;
  return false;
};

export default isInViewport;
