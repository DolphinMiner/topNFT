"use client";
import { ReactNode } from "react";
import ContractConfigsContext, { contractConfigs } from "@/providers/contract";
import WagmiProvider from "@/providers/wagmi";

type Props = {
  children: ReactNode;
};
export default function RootProvider({ children }: Props) {
  return (
    <WagmiProvider>
      <ContractConfigsContext.Provider value={contractConfigs}>
        {children}
      </ContractConfigsContext.Provider>
    </WagmiProvider>
  );
}
