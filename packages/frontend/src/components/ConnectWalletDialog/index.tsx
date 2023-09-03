import ConnectWalletDialog from "./Dialog";
import { TypeConnectConf } from "./interface";
import { showModal } from "@/components/Modal";

export function showConnectWalletDialog(connectConf: TypeConnectConf) {
  const getConf = (_connectConf: TypeConnectConf) => ({
    title: "Connect your wallet",
    onlineDivideBorder: true,
    bodyClassName: "desktop:pt-4",
    content: <ConnectWalletDialog connectConf={_connectConf} />,
  });
  const { close, update } = showModal(getConf(connectConf));

  return {
    close,
    update: (updateConnectConf: Partial<TypeConnectConf>) => {
      update(getConf({ ...connectConf, ...updateConnectConf }));
    },
  };
}
