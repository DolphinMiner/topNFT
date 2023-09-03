import { useConnect } from "wagmi";

export type TypeConnectConf = Pick<
  ReturnType<typeof useConnect>,
  "connectAsync" | "connectors" | "isLoading" | "pendingConnector" | "error"
>;
