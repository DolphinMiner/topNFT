import "@/styles/globals.css";
import i18next, { dir } from "i18next";
import { AppProps } from "next/app";
import localFont from "next/font/local";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { fallbackLng, languages } from "@/i18n";
import ContractConfigsContext, { contractConfigs } from "@/providers/contract";

const tripGeomBold = localFont({
  src: "../../public/TripGeom-Bold.woff2",
  variable: "--TripGeom-Bold",
});
const tripGeomMedium = localFont({
  src: "../../public/TripGeom-Medium.woff2",
  variable: "--TripGeom-Medium",
});
const tripGeomRegular = localFont({
  src: "../../public/TripGeom-Regular.woff2",
  variable: "--TripGeom-Regular",
});
const mouldyCheeseRegular = localFont({
  src: "../../public/MouldyCheeseRegular-WyMWG.ttf",
  variable: "--MouldyCheese-Regular",
});
const AaHuanLeBao = localFont({
  src: "../../public/AaHuanLeBao.ttf",
  variable: "--AaHuanLeBao",
});
const mRobotoMedium = localFont({
  src: "../../public/Roboto-Medium.ttf",
  variable: "--Roboto-Medium",
});

const ERROR_PATH = "/_error";
const TOP_POSITION = "thisistop";
const BOTTOM_POSITION = "thisisbottom";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { asPath, query, pathname } = router;

  // Detect current language
  const [, slug] = asPath.split("/");
  const langSlug = languages.includes(slug) ? slug : "";
  const language =
    (Array.isArray(query.lang) ? query.lang[0] : query.lang) ||
    langSlug ||
    fallbackLng;

  const [clientLanguage, setClientLanguage] = useState(language);

  useEffect(() => {
    let timerId: NodeJS.Timeout | undefined;
    if (pathname === ERROR_PATH) {
      timerId = setTimeout(() => {
        router.replace(`/${fallbackLng}`);
      }, 3000);
    }
    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [pathname]);

  useEffect(() => {
    setClientLanguage(language);

    if (document) {
      document.documentElement.setAttribute("lang", language);
      document.documentElement.setAttribute("dir", dir(language));
    }
  }, [language]);

  // Don't trigger `i18next.changeLanguage()` on root folder, use `router` to redirect to the specific language
  if (asPath !== "/" && asPath !== "/404" && pathname !== ERROR_PATH) {
    i18next.changeLanguage(clientLanguage);
  }

  return (
    <>
      <Head>
        <title>Top NFT</title>
        <meta name="keywords" content="Top NFT" />
      </Head>
      {/* @ts-ignore https://nextjs.org/blog/styling-next-with-styled-jsx */}
      <>
        <style jsx global>{`
          html {
            --TripGeom-Bold: ${tripGeomBold.style.fontFamily};
            --TripGeom-Medium: ${tripGeomMedium.style.fontFamily};
            --TripGeom-Regular: ${tripGeomRegular.style.fontFamily};
            --MouldyCheese-Regular: ${mouldyCheeseRegular.style.fontFamily};
            --AaHuanLeBao: ${AaHuanLeBao.style.fontFamily};
            --Roboto-Medium: ${mRobotoMedium.style.fontFamily};
          }
        `}</style>
      </>
      <ContractConfigsContext.Provider value={contractConfigs}>
        {/* <main className="bg-ctrip-theme"> */}
        <div className="h-0 w-0" id={TOP_POSITION}></div>
        <Component {...pageProps} />
        {/* </main> */}
        <div className="h-0 w-0" id={BOTTOM_POSITION}></div>
      </ContractConfigsContext.Provider>
    </>
  );
}
