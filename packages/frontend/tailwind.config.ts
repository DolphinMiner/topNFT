import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        c2: "repeat(2, 1fr)",
        c4: "repeat(4, 1fr)",
      },
      backgroundImage: {
        "white-triangle":
          "conic-gradient(from 225deg at 100% 50%, #fff 90deg, transparent 90deg)",
        "black-triangle":
          "conic-gradient(from 225deg at 100% 50%, black 90deg, transparent 90deg)",
      },
      aspectRatio: {
        half: "1 / 2",
      },
      colors: {
        nav: {
          bg: "#FFD266",
        },
        footer: {
          bg: "#FFD266",
        },
        input: {
          brandingBlue: "#3264FF",
          errorRed: "#ee3b28",
        },
        cooperationItem: {
          bg: "#FFE094",
        },
        lightBorder: "#ffd266",
        softBorder: "#FFE094",
        disabled: "#5C697C",
        storyGradient: "rgba(15, 21, 25, 0)",
        lineGrayBg: "#2850cc",
        lineGreenBg: "#c2cc66",
      },
      borderRadius: {
        nav: "100px",
        "foot-btn": "32px",
        "carousel-item": "127.68px 127.68px 127.68px 127.68px",
      },
      borderWidth: {
        "carousel-item": "3px",
      },
      width: {
        "benefit-icon": "32%",
        nav: "26.379%",
        "nav-list": "542px",
        "nav-icon": "20.915%",
        language: "72px",
        footer: "360px",
        "footer-button": "88px",
        "wallet-button": "128px",
        "nav-wallet": "128px",
        "nav-opensea": "138px",
        "wallet-pop": "480px",
        "input-m": "300px",
        "input-l": "600px",
        "carousel-item": "255px",
        "footer-logo": "314px",
      },
      height: {
        footer: "280px",
        "footer-button": "88px",
        "nav-wallet": "26px",
        "h5-wallet-button": "48px",
        "wallet-pop": "60px",
        "input-m": "54px",
        "input-l": "112px",
        "cooperator-xs": "88px",
        "cooperation-dialog": "414px",
        "carousel-item": "275px",
        "footer-logo": "80px",
      },
      textColor: {
        "footer-color": "#3264ff",
        "wallet-detail": "#84a2ff",
        brandingBlue: "#3264FF",
        perksBlack: "#0f294d",
      },
      fontSize: {
        footer: "0.625rem",
        "2.5xl": ["1.75rem", "2.125rem"], // font-size: 28px
      },
      fontFamily: {
        "TripGeom-Bold": ["var(--TripGeom-Bold)"],
        "TripGeom-Regular": ["var(--TripGeom-Regular)"],
        "TripGeom-Medium": ["var(--TripGeom-Medium)"],
        "MouldyCheese-Regular": ["var(--MouldyCheese-Regular)"],
        AaHuanLeBao: ["var(--AaHuanLeBao)"],
        "Roboto-Medium": ["var(--Roboto-Medium)"],
      },
      backgroundColor: {
        "ctrip-theme": "#3264FF",
        "img-bk": "#6f92ff",
      },
      keyframes: {
        "up-carousel": {
          from: { transform: "translateX(2580px)" },
          to: { transform: "translateX(-280px)" },
        },
        "down-carousel": {
          from: { transform: "translateX(-280px)" },
          to: { transform: "translateX(2580px)" },
        },
        "flower-loading": {
          from: {
            opacity: "0.8",
          },
          to: {
            opacity: "0.1",
          },
        },
        "story-guide": {
          from: {
            transform: "translateY(0px)",
            opacity: "0",
          },
          to: {
            transform: "translateY(20px)",
            opacity: "1",
          },
        },
        "story-entrance": {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(-18deg)",
          },
        },
      },
      animation: {
        "up-carousel": "up-carousel 40s linear infinite",
        "down-carousel": "down-carousel 40s linear infinite",
        "flower-loading": "flower-loading 0.8s linear infinite",
        "story-guide": "story-guide 1.5s linear infinite",
        "story-entrance": "story-entrance 0.5s linear forwards",
      },
    },
    screens: {
      // ----- default screens -----
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1160px",
      //d => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }

      // ------ custom screens ------
      // ------ 本项目主要使用此两个阈值 ------
      mobile: { max: "745.99px" },
      // => @media (min-width: 376px) { ... }
      desktop: "746px",
      // => @media (min-width: 746px) { ... }
    },
  },
  plugins: [],
};
export default config;
