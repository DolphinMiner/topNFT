import { ReactNode } from "react";
// Wagmi
import { configureChains, createClient, WagmiConfig } from "wagmi";
// Chain
import { mainnet, goerli, localhost } from "wagmi/chains";
// Provider
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
// Utils
import { generateConfigs } from "./utils";
import { isGoerli, isProd } from "@/utils/checkEnv";

const ALCHEMY_PROJECT_KEY = process.env.ALCHEMY_PROJECT_KEY || "";

let client: any;

if (isProd()) {
  // production network
  const { chains, provider, webSocketProvider } = configureChains(
    [mainnet],
    [alchemyProvider({ apiKey: ALCHEMY_PROJECT_KEY }), publicProvider()],
  );
  client = createClient(generateConfigs(chains, provider, webSocketProvider));
} else if (isGoerli()) {
  // goerli test network
  const { chains, provider, webSocketProvider } = configureChains(
    [goerli],
    [alchemyProvider({ apiKey: ALCHEMY_PROJECT_KEY }), publicProvider()],
  );
  client = createClient(generateConfigs(chains, provider, webSocketProvider));
} else {
  // localhost test network
  const { chains, provider, webSocketProvider } = configureChains(
    [localhost],
    [
      jsonRpcProvider({
        rpc: () => ({
          http: "http://localhost:8545/",
        }),
      }),
    ],
  );
  client = createClient(generateConfigs(chains, provider, webSocketProvider));
}

type Props = {
  children: ReactNode;
};
// Pass client to React Context Provider
export default function WagmiProvider({ children }: Props) {
  return <WagmiConfig client={client}>{children}</WagmiConfig>;
}
