import { useContext, useState } from "react";
import { useAccount, useContractRead, useContractWrite } from "wagmi";
import { ClientOnly } from "../ClientOnly";
import { ContractConfigsContext } from "@/providers/contract";

const GENESIS = BigInt(0);
const FREE_MINT = BigInt(1);
const PRESALE_MINT_ONE = BigInt(2);
const PRESALE_MINT_TWO = BigInt(3);
const PUBLIC_MINT = BigInt(4);
const STAGE: Record<string, string> = {
  [GENESIS.toString()]: "genesis",
  [FREE_MINT.toString()]: "freeMint",
  [PRESALE_MINT_ONE.toString()]: "presaleMintOne",
  [PRESALE_MINT_TWO.toString()]: "presaleMintTwo",
  [PUBLIC_MINT.toString()]: "publicMint",
};

export function TestMint() {
  const [loading, setLoading] = useState(false);
  const [supply, setSupply] = useState(0);
  const { address: currentAddress, isConnected } = useAccount();
  const { trekkiNFT } = useContext(ContractConfigsContext);

  const { data: saleStage, refetch: fetchSaleStage } = useContractRead<
    typeof trekkiNFT.abi,
    "saleStage",
    bigint
  >({
    ...trekkiNFT,
    functionName: "saleStage",
  });
  const { refetch: fetchPublicMintPrice } = useContractRead<
    typeof trekkiNFT.abi,
    "publicMintPrice",
    bigint
  >({
    ...trekkiNFT,
    functionName: "publicMintPrice",
  });
  const { write: publicMintSync } = useContractWrite({
    ...trekkiNFT,
    functionName: "publicMint",
  });

  const publicMint = async () => {
    try {
      const { data: latestPublicMintPrice } = await fetchPublicMintPrice();
      if (!latestPublicMintPrice) {
        throw new Error("latestPublicMintPrice is null");
      }
      publicMintSync({
        value: latestPublicMintPrice * BigInt(supply),
      });
      setLoading(false);
    } catch (e) {
      console.error(e);
      setLoading(false);
    }
  };

  const handleClick = async () => {
    if (!isConnected || loading) return;

    try {
      setLoading(true);
      const latestStage = await fetchSaleStage().then((res) => {
        return res.data;
      });
      console.log("latestStage: ", latestStage);
      await publicMint();
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  if (!isConnected) return null;

  return (
    <ClientOnly>
      <div className="w-full">
        <p>{`currentAddress: ${currentAddress}`}</p>

        {saleStage ? (
          <p>{`${saleStage.toString()}: ${
            STAGE[saleStage.toString()] || "--"
          }`}</p>
        ) : null}

        <p>
          <label htmlFor="supply">Supply: </label>
          <input
            id="supply"
            type="number"
            value={supply}
            onChange={(e) => {
              setSupply(parseInt(e.target.value || "0"));
            }}
          />
        </p>
        <p>
          <button disabled={loading} type="button" onClick={handleClick}>
            Mint
          </button>
        </p>
      </div>
    </ClientOnly>
  );
}
