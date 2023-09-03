import { useContext, useState } from "react";
import { useAccount, useContractRead, useContractWrite } from "wagmi";
import { BigNumber } from "ethers";
import ContractConfigsContext from "@/providers/contract";
import { getMerkleProof } from "@/utils/merkleTree";

const GENESIS = 0;
const FREE_MINT = 1;
const PRESALE_MINT_ONE = 2;
const PRESALE_MINT_TWO = 3;
const PUBLIC_MINT = 4;
const STAGE: Record<number, string> = {
  [GENESIS]: "genesis",
  [FREE_MINT]: "freeMint",
  [PRESALE_MINT_ONE]: "presaleMintOne",
  [PRESALE_MINT_TWO]: "presaleMintTwo",
  [PUBLIC_MINT]: "publicMint",
};

export default function TestMint() {
  const [loading, setLoading] = useState(false);
  const [supply, setSupply] = useState(0);
  const { address: currentAddress, isConnected } = useAccount();
  const { trekkiNFT } = useContext(ContractConfigsContext);

  const merkleProof = currentAddress && getMerkleProof(currentAddress);
  const { data: saleStageBigInt, refetch: fetchSaleStage } = useContractRead<
    typeof trekkiNFT.abi,
    "saleStage",
    BigNumber
  >({
    ...trekkiNFT,
    functionName: "saleStage",
  });

  const saleStage = BigNumber.from(saleStageBigInt || "0").toNumber();

  const { data: presaleMintOnePrice } = useContractRead({
    ...trekkiNFT,
    functionName: "presaleMintOnePrice",
  }) as { data: BigNumber };
  const { data: presaleMintTwoPrice } = useContractRead({
    ...trekkiNFT,
    functionName: "presaleMintTwoPrice",
  }) as { data: BigNumber };
  const { data: publicMintPrice } = useContractRead({
    ...trekkiNFT,
    functionName: "publicMintPrice",
  }) as { data: BigNumber };

  const { writeAsync: freeMintAsync } = useContractWrite({
    ...trekkiNFT,
    mode: "recklesslyUnprepared",
    args: [merkleProof],
    functionName: "freeMint",
  });
  const { writeAsync: presaleMintOneAsync } = useContractWrite({
    ...trekkiNFT,
    mode: "recklesslyUnprepared",
    functionName: "presaleMintOne",
  });
  const { writeAsync: presaleMintTwoAsync } = useContractWrite({
    ...trekkiNFT,
    mode: "recklesslyUnprepared",
    functionName: "presaleMintTwo",
  });
  const { writeAsync: publicMintAsync } = useContractWrite({
    ...trekkiNFT,
    mode: "recklesslyUnprepared",
    functionName: "publicMint",
  });

  const freeMint = () => {
    console.log("freeMint");
    freeMintAsync()
      .catch((err) => {
        console.log(err);
      })
      .then(() => {
        setLoading(false);
      });
  };

  const presaleMintOne = () => {
    console.log("presaleMintOne", { supply, merkleProof, presaleMintOnePrice });
    if (supply > 0 && currentAddress) {
      presaleMintOneAsync({
        recklesslySetUnpreparedArgs: [supply, merkleProof],
        // @ts-ignore
        recklesslySetUnpreparedOverrides: {
          from: currentAddress,
          value: BigNumber.from(presaleMintOnePrice).mul(supply), // 传入合约里的售价
        },
      })
        .catch((err) => {
          console.log(err);
        })
        .then(() => {
          setLoading(false);
        });
    } else {
      alert("Check wallet or supply!");
      setLoading(false);
    }
  };

  const presaleMintTwo = () => {
    console.log("presaleMintTwo");
    if (supply > 0 && currentAddress) {
      presaleMintTwoAsync({
        recklesslySetUnpreparedArgs: [supply, merkleProof],
        // @ts-ignore
        recklesslySetUnpreparedOverrides: {
          from: currentAddress,
          value: BigNumber.from(presaleMintTwoPrice).mul(supply), // 传入合约里的售价
        },
      })
        .catch((err) => {
          console.log(err);
        })
        .then(() => {
          setLoading(false);
        });
    } else {
      alert("Check wallet or supply!");
      setLoading(false);
    }
  };

  const publicMint = () => {
    console.log("publicMint");
    if (supply > 0 && currentAddress) {
      publicMintAsync({
        recklesslySetUnpreparedArgs: [supply],
        // @ts-ignore
        recklesslySetUnpreparedOverrides: {
          from: currentAddress,
          value: BigNumber.from(publicMintPrice).mul(supply), // 传入合约里的售价
        },
      })
        .catch((err) => {
          console.log(err);
        })
        .then(() => {
          setLoading(false);
        });
    } else {
      alert("Check wallet or supply!");
      setLoading(false);
    }
  };

  const handleClick = async () => {
    if (!isConnected || loading) return;

    try {
      setLoading(true);
      const latestStage = await fetchSaleStage().then((res) => {
        const latestStage = BigNumber.from(res.data || "0").toNumber();
        return latestStage;
      });
      console.log({ latestStage });
      switch (saleStage) {
        case FREE_MINT:
          return freeMint();
        case PRESALE_MINT_ONE:
          return presaleMintOne();
        case PRESALE_MINT_TWO:
          return presaleMintTwo();
        case PUBLIC_MINT:
          return publicMint();
        default:
          break;
      }
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  if (!isConnected) return null;
  return (
    <div className="w-full">
      <p>{`${saleStage}: ${STAGE[saleStage] || "--"}`}</p>
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
  );
}
