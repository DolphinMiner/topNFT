import classNames from "classnames";
import { useMemo } from "react";
import { useAccount } from "wagmi";

const CONNECTING = "connecting...";

type WalletProps = {
  className?: string;
  isLoading?: boolean;
};
const Wallet = ({ className, isLoading }: WalletProps) => {
  const { address, isConnected } = useAccount();

  const shortAddress = useMemo(() => {
    if (isConnected && address) {
      return `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;
    }
  }, [isConnected, address]);

  return (
    <div
      className={classNames([
        "shadow-nav-wallet relative inline-block h-nav-wallet w-nav-wallet rounded-foot-btn border border-black bg-white px-1 py-1 hover:top-1 hover:shadow-none",
        "text-center text-[16px] leading-[16px]",
        className ? className : "",
      ])}
    >
      <span className="font-TripGeom-Bold text-xs">
        {isConnected && address ? (
          <span>{shortAddress}</span>
        ) : isLoading ? (
          <span>{CONNECTING}</span>
        ) : (
          <span>CONNECT WALLET</span>
        )}
      </span>
    </div>
  );
};

export default Wallet;
