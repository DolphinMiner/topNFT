import { Chain } from "wagmi";
// Connector
// import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { InjectedConnector } from "wagmi/connectors/injected";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
// import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
// import {
//   CoinbaseWalletAppName,
//   WalletConnectCloudProjectId,
// } from "@/constants";

function generateConnectors(chains: Chain[]) {
  return [
    new MetaMaskConnector({ chains }),
    // new CoinbaseWalletConnector({
    //   chains,
    //   options: {
    //     appName: CoinbaseWalletAppName,
    //   },
    // }),
    // new WalletConnectConnector({
    //   chains,
    //   options: {
    //     projectId: WalletConnectCloudProjectId,
    //     metadata: {
    //       name: "Trekki",
    //       description:
    //         "Trekki is a web3.0 website that provides users with mintnft functions.",
    //       url: "https://www.trekki.io",
    //       icons: [
    //         "https://static-content.trekki.io/assets/favicon.ico",
    //         "https://static-content.trekki.io/assets/logo.svg",
    //       ],
    //     },
    //   },
    // }),
    new InjectedConnector({
      chains,
      options: {
        name: "OkxWallet",
        shimDisconnect: false,
        getProvider: () => window?.okxwallet,
      },
    }),
  ];
}

export function generateConfigs<C extends Chain[], P, W>(
  chains: C,
  provider: P,
  webSocketProvider: W,
) {
  return {
    autoConnect: true,
    connectors: generateConnectors(chains),
    provider,
    webSocketProvider,
  };
}
