import { Address } from "@wagmi/core";
import { Abi } from "abitype";
import React from "react";
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

export const ContractConfigsContext = React.createContext(contractConfigs);
