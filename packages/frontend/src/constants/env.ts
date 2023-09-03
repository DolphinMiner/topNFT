// 对应package.json和.env中的环境变量
export const LOCAL = "local";
export const GOERLI = "goerli";
export const PROD = "prod";

export const ENV = {
  LOCAL,
  GOERLI,
  PROD,
} as const;

export const CONTRACT_FOLDER_SUFFIX = {
  [LOCAL]: "",
  [GOERLI]: "-goerli",
  [PROD]: "-prod",
} as const;
