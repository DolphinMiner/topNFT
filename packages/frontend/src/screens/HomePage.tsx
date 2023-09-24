import { useState, useEffect } from "react";
import { ConnectWallet } from "@/components/ConnectWallet";
import { TestMint } from "@/components/TestMint";

export function HomePage() {
  const [isDesktop, setIsDesktop] = useState(window?.innerWidth >= 746);

  useEffect(() => {
    const handleWindowWidth = () => {
      setIsDesktop(window?.innerWidth >= 746);
    };

    window?.addEventListener("resize", handleWindowWidth);

    return () => {
      window?.removeEventListener("resize", handleWindowWidth);
    };
  }, [isDesktop]);

  return (
    <div>
      <ConnectWallet />
      <TestMint />
    </div>
  );
}
