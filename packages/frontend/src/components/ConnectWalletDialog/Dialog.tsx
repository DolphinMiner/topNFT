import React, { useCallback } from "react";
import { TypeConnectConf } from "./interface";
import IconButton from "@/components/IconButton";
import { imgUrl } from "@/constants/url";
import { showUserGuideDialog } from "@/components/UserGuideDialog";
import Loading from "@/components/FlowerLoading";
import { t_common } from "@/i18n";

enum WalletIdEnum {
  metaMask = "metaMask",
  wallet = "walletConnect",
  coinBase = "coinbaseWallet",
  Okx = "injected",
}
interface IProps {
  connectConf: TypeConnectConf;
}

const Wallets = [
  {
    id: WalletIdEnum.metaMask,
    title: t_common("wallet_metaMask"),
    img: "/metamask.png",
  },
  // {
  //   id: WalletIdEnum.wallet,
  //   title: t_common("wallet_walletConnect"),
  //   img: "/wallet.png",
  // },
  // {
  //   id: WalletIdEnum.coinBase,
  //   title: t_common("wallet_coinBase"),
  //   img: "/coinbase.png",
  // },
  { id: WalletIdEnum.Okx, title: t_common("wallet_Okx"), img: "/okx.png" },
];

export default function Dialog({ connectConf }: IProps) {
  const { connectAsync, connectors, isLoading, pendingConnector } = connectConf;

  const clickTrackLogPrefix = "connectWalletDialog-";

  const walletClickHandle = useCallback(
    (walletId: WalletIdEnum) => {
      const connector = connectors?.find(
        (connect) => connect.id === walletId && connect.ready,
      );
      if (connector) {
        connectAsync({ connector: connector }).catch((e) => {
          console.log(e);
        });
      }
    },
    [connectors, connectAsync],
  );

  const viewDetailClickHandle = useCallback((hasIcon = true) => {
    showUserGuideDialog(hasIcon);
  }, []);

  const isConnectorDisabled = useCallback(
    (walletId: WalletIdEnum) => {
      return !connectors?.find((connect) => connect.id === walletId)?.ready;
    },
    [connectors],
  );

  const renderWallet = ({ id, title, img }: (typeof Wallets)[0]) => {
    const walletIsLoading = !!(isLoading && pendingConnector?.id === id);
    const isDisabled = walletIsLoading || isConnectorDisabled(id);

    return (
      <IconButton
        className="w-wallet-button mobile:flex mobile:h-h5-wallet-button mobile:w-full mobile:items-center mobile:p-0 mobile:px-4"
        {...(!isDisabled && { onClick: () => walletClickHandle(id) })}
        isDisabled={isDisabled}
        key={id}
      >
        {walletIsLoading ? (
          <Loading className="mb-1 h-9 w-9 mobile:m-0" key={`${id}-loading`} />
        ) : (
          <img
            alt={img}
            key={`${id}-img`}
            src={`${imgUrl}/wallet${img}`}
            className={`m-auto mb-1 h-9 w-9 mobile:m-0${
              isDisabled ? " opacity-60" : ""
            }`}
          />
        )}
        <p
          key={`${id}-name`}
          className={`font-TripGeom-Regular text-xs mobile:grow mobile:font-TripGeom-Bold mobile:text-xl ${
            isDisabled ? " text-disabled" : ""
          }`}
        >
          {title}
        </p>
      </IconButton>
    );
  };

  return (
    <div className="text-center">
      <div className="grid grid-cols-2 gap-4 mobile:grid-cols-1 desktop:justify-items-center">
        {Wallets.map((wallet) => renderWallet(wallet))}
      </div>
      <div className="mt-4 font-TripGeom-Regular text-sm">
        {t_common("new_user_guide")}
        <p
          className="cursor-pointer text-wallet-detail mobile:hidden"
          onClick={() => viewDetailClickHandle()}
        >
          {t_common("view_details")}
        </p>
        <span
          className="cursor-pointer text-wallet-detail desktop:hidden"
          onClick={() => viewDetailClickHandle(false)}
        >
          &nbsp;{t_common("view_details")}
          {" >"}
        </span>
      </div>
    </div>
  );
}
