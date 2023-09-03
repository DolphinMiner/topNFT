import { useMemo } from "react";
import { useAccount } from "wagmi";
import MenuItem from "./MenuItem";

const CONNECTING = "connecting...";

type WalletItemProps = {
  onClick?: () => void;
  isLoading?: boolean;
};
const WalletItem = ({ isLoading, onClick }: WalletItemProps) => {
  const { address, isConnected } = useAccount();

  const shortAddress = useMemo(() => {
    if (isConnected && address) {
      return `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;
    }
    return "";
  }, [isConnected, address]);

  return (
    <MenuItem
      value={
        isConnected && address
          ? `Account:  ${shortAddress}`
          : isLoading
          ? CONNECTING
          : "Connect Wallet"
      }
      {...(typeof onClick === "function" ? { onClick } : null)}
    />
  );
};

export default WalletItem;
