const MintDialogStatus = {
  SUCCESS: "SUCCESS",
  FAILURE: "FAILURE",
  CONNECT_WALLET_FAILED: "CONNECT_WALLET_FAIL",
};

// https://wagmi.sh/react/connectors/coinbaseWallet
const CoinbaseWalletAppName = "ExploMon";
// https://wagmi.sh/react/connectors/walletConnect
const WalletConnectCloudProjectId = "1fdfad6451707aaf85dd9b7df97253f3";

export { MintDialogStatus, CoinbaseWalletAppName, WalletConnectCloudProjectId };

// name of pages
export const PAGE_NAMES = {
  home: "home",
  mint: "mint",
  story: "story",
};
