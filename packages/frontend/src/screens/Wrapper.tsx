"use client";

import { ReactNode } from "react";
import WagmiProvider from "@/providers/wagmi";

type WrapperProps = {
  children?: ReactNode;
};
export default function Wrapper({ children }: WrapperProps) {
  return <WagmiProvider>{children}</WagmiProvider>;
}
