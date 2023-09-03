import { useContext, useMemo } from "react";
import { Address, useContractRead } from "wagmi";
import ContractConfigsContext from "@/providers/contract";
import { getMerkleProof } from "@/utils/merkleTree";

type WhitelistProps = {
  address: Address;
};
export default function Whitelist({ address }: WhitelistProps) {
  const { trekkiNFT: trekkiNFTCfg } = useContext(ContractConfigsContext);
  const merkleProof = useMemo(() => {
    if (!address) return "";
    return getMerkleProof(address);
  }, [address]);

  const { data: isInWhiteList } = useContractRead({
    ...trekkiNFTCfg,
    functionName: "isValidUser",
    args: [address, merkleProof],
  });

  return (
    <div className="mb-2">
      <span className="inline-block w-20">Whitelist:</span>
      <span>{isInWhiteList ? "YES" : "NO"}</span>
    </div>
  );
}
