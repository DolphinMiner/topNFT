import { Ethereum } from "@wagmi/core";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, any>>;
    okxwallet?: Ethereum;
  }
}
