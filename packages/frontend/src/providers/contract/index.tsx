import React from "react";
import { Address } from "wagmi";
import { Abi } from "abitype";
import { getConfigs } from "./utils";
import { isGoerli, isProd } from "@/utils/checkEnv";
import { ENV } from "@/constants/env";

const env = isProd() ? ENV.PROD : isGoerli() ? ENV.GOERLI : ENV.LOCAL;

const { TrekkiNFT, contractAddress } = getConfigs(env);

export const contractConfigs = {
  trekkiNFT: {
    address: contractAddress.TrekkiNFT,
    abi: TrekkiNFT.abi,
  },
} as Record<
  "trekkiNFT",
  {
    address: Address;
    abi: Abi;
  }
>;

const ContractConfigsContext = React.createContext(contractConfigs);

export default ContractConfigsContext;
