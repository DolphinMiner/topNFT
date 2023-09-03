import { CONTRACT_FOLDER_SUFFIX, ENV } from "@/constants/env";
import { Values } from "@/utils/types";

export const getConfigs = (env: Values<typeof ENV>) => {
  const suffix = CONTRACT_FOLDER_SUFFIX[env];
  return {
    contractAddress: require(`../../contracts${suffix}/contract-address.json`),
    TrekkiNFT: require(`../../contracts${suffix}/TrekkiNFT.json`),
  };
};
