import { ENV } from "@/constants/env";

export const isLocal = () => process.env.PROVIDER_MODE === ENV.LOCAL;

export const isGoerli = () => process.env.PROVIDER_MODE === ENV.GOERLI;

export const isProd = () => process.env.PROVIDER_MODE === ENV.PROD;

const checkEnv = {
  isLocal,
  isGoerli,
  isProd,
};

export default checkEnv;
