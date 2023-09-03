"use client";

import { useState, useEffect } from "react";
import Wrapper from "./Wrapper";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainPic from "@/components/MainPic";
import {
  generalImgLazyLoading,
  rowImgLazyLoading,
} from "@/utils/imgLazyLoading";

export default function HomePage() {
  const [isDesktop, setIsDesktop] = useState(window?.innerWidth >= 746);

  useEffect(() => {
    generalImgLazyLoading();
    rowImgLazyLoading();

    const handleWindowWidth = () => {
      setIsDesktop(window?.innerWidth >= 746);
    };

    window?.addEventListener("resize", handleWindowWidth);

    return () => {
      window?.removeEventListener("resize", handleWindowWidth);
    };
  }, [isDesktop]);

  return (
    <Wrapper>
      <div className="m-auto bg-[#3264FF]">
        <Header page="home" isDesktop={isDesktop} />
        <MainPic isDesktop={isDesktop} page="home" />
      </div>
      <Footer page="home" />
    </Wrapper>
  );
}
