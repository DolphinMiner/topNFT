// @ts-nocheck

export const generalImgLazyLoading = () => {
  const lazyloadImages = document.querySelectorAll(".lazy");
  const imageObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.intersectionRatio > 0) {
        const image = entry.target;
        image.src = image.dataset.src;
        // image.classList.remove("lazy");
        imageObserver.unobserve(image);
      }
    });
  });

  lazyloadImages.forEach(function (image) {
    imageObserver.observe(image);
  });
};

// 轮播图由于是横向移动，是整个图片都出现在浏览器可视范围内才会加载图片，所以懒加载要单独处理
export const rowImgLazyLoading = () => {
  const lazyloadImages = document.querySelectorAll(".rowlazy");
  let lazyloadThrottleTimeout;

  function lazyload() {
    if (lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }
    lazyloadThrottleTimeout = setTimeout(function () {
      lazyloadImages.forEach(function (img) {
        if (isInViewPort(img)) {
          img.src = img.dataset.src;
          /**
           * img.classList.remove('rowlazy'); //不知道为什么这个remove classList 不生效，所以换个方式
           * 像40行判断每个img是否都有src了，如果都有了，就移除监听
           */
        }
      });
      if (Array.from(lazyloadImages).every((img) => !!img.src)) {
        document.removeEventListener("scroll", lazyload);
        window.removeEventListener("resize", lazyload);
        window.removeEventListener("orientationChange", lazyload);
      }
    }, 10);
  }

  function isInViewPort(element) {
    const viewHeight =
      window.innerHeight || document.documentElement.clientHeight;
    const { top } = element.getBoundingClientRect();
    return top >= 0 && top <= viewHeight + 100;
  }

  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
};
