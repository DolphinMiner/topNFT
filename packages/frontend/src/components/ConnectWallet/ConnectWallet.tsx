"use client";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { ClientOnly } from "../ClientOnly";
import { Whitelist } from "./Whitelist";

export function ConnectWallet() {
  const { address, connector, isConnected } = useAccount();
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect({
      onSuccess(data) {
        console.log("Connect wallet successfully!", data);
      },
      onError(error) {
        console.log("Failed to connect wallet!", error);
      },
    });
  const { disconnect } = useDisconnect();

  return (
    <ClientOnly>
      <div className="w-fit min-w-fit rounded-lg border-2 border-slate-800 p-4">
        {isConnected && address ? (
          <>
            <div className="mb-2">
              <span className="inline-block w-20">Address:</span>
              <span>{address}</span>
            </div>
            <div className="mb-2">
              <span className="inline-block w-20">Wallet:</span>
              <span>{connector?.name || "--"}</span>
            </div>
            <Whitelist address={address} />
            <button
              className="inline-block min-w-fit rounded-md bg-slate-500 p-2 text-center text-xs text-slate-50"
              onClick={() => disconnect()}
            >
              Disconnect
            </button>
          </>
        ) : (
          <>
            {connectors.map((connector) => (
              <button
                className="mr-2 inline-block min-w-fit rounded-md bg-slate-500 p-3 text-center text-xs text-slate-50"
                disabled={!connector.ready}
                key={connector.id}
                onClick={() => connect({ connector })}
              >
                {connector.name}
                {!connector.ready && " (unsupported)"}
                {isLoading &&
                  connector.id === pendingConnector?.id &&
                  " (connecting)"}
              </button>
            ))}

            {error ? <div>{error.message}</div> : null}
          </>
        )}
      </div>
    </ClientOnly>
  );
}
