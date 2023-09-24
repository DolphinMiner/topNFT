import { useContext, useMemo } from "react";
import { Address, useContractRead } from "wagmi";
import { ContractConfigsContext } from "@/providers/contract";
import { getMerkleProof } from "@/utils/merkleTree";

type WhitelistProps = {
  address: Address;
};
export function Whitelist({ address }: WhitelistProps) {
  const { trekkiNFT } = useContext(ContractConfigsContext);
  const merkleProof = useMemo(() => {
    if (!address) return "";
    return getMerkleProof(address);
  }, [address]);

  const args = [address, merkleProof];

  const { data: isInWhiteList } = useContractRead({
    ...trekkiNFT,
    functionName: "isValidUser",
    args: args,
  });

  return (
    <div className="mb-2">
      <span className="inline-block w-20">Whitelist:</span>
      <span>{isInWhiteList ? "YES" : "NO"}</span>
    </div>
  );
}
