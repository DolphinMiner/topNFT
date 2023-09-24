import "@/styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
// Wagmi
import { goerli, mainnet } from "@wagmi/core/chains";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
// Provider
import { alchemyProvider } from "@wagmi/core/providers/alchemy";
import { publicProvider } from "@wagmi/core/providers/public";
// Connector
import { MetaMaskConnector } from "@wagmi/core/connectors/metaMask";
import { WalletConnectConnector } from "@wagmi/core/connectors/walletConnect";
// Contract
import { contractConfigs, ContractConfigsContext } from "@/providers/contract";

import { WalletConnectCloudProjectId } from "@/constants";

const ALCHEMY_PROJECT_KEY = process.env.ALCHEMY_PROJECT_KEY || "";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, goerli],
  [alchemyProvider({ apiKey: ALCHEMY_PROJECT_KEY }), publicProvider()],
);

const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({
      chains,
      options: {
        UNSTABLE_shimOnConnectSelectAccount: true,
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId: WalletConnectCloudProjectId,
      },
    }),
  ],
  publicClient,
  webSocketPublicClient,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Top NFT</title>
        <meta name="keywords" content="Top NFT" />
      </Head>

      <WagmiConfig config={config}>
        <ContractConfigsContext.Provider value={contractConfigs}>
          <Component {...pageProps} />
        </ContractConfigsContext.Provider>
      </WagmiConfig>
    </>
  );
}
