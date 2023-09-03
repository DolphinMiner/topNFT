import { useCallback, useState, useMemo, useEffect, useRef } from "react";
import { Popover } from "@headlessui/react";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import i18next from "i18next";
import Discord from "../Discord";
import Twitter from "../Twitter";
import Wallet from "../Wallet";
import ExpandButton from "./ExpandButton";
import MenuItem from "./MenuItem";
import MenuModal from "./MenuModal";
// import WalletItem from "./WalletItem";
import WalletItem from "./WalletItem";
import { showUserGuideDialog } from "@/components/UserGuideDialog";
import { t_common } from "@/i18n";
import { showConnectWalletDialog } from "@/components/ConnectWalletDialog";
import { showToast } from "@/components/Modal";
import type { ShowModalHandle } from "@/components/Modal/interface";
import type { TypeConnectConf } from "@/components/ConnectWalletDialog/interface";
import { onClickAnchorLabel } from "@/utils/onClickAnchorLabel";

const clickTrackLogPrefix = "header-";
interface IProps {
  isDesktop: boolean;
  page: string;
}

const Header = ({ page, isDesktop }: IProps) => {
  const [expand, setExpand] = useState(false);
  const [isWalletPopoverOpen, changeWalletPopover] = useState(false);
  const walletModalRef = useRef<ShowModalHandle<TypeConnectConf> | null>(null);
  const { language } = i18next;
  const root = useMemo(() => (language ? `/${language}` : ""), [language]);
  const { address, isConnected } = useAccount();
  const { connectAsync, connectors, error, isLoading, pendingConnector } =
    useConnect({
      onSuccess(data) {
        if (walletModalRef.current) {
          const { close } = walletModalRef.current;
          if (typeof close === "function") {
            walletModalRef.current = null;
            close();
          }
        }
        console.log("Connect wallet successfully!", data);
      },
      onError(error) {
        console.log("Failed to connect wallet!", error);
        showToast({ message: error?.message || "connect fail!" });
      },
    });

  const connectConf = useMemo(
    () => ({
      connectAsync,
      connectors,
      error,
      isLoading,
      pendingConnector,
    }),
    [connectAsync, connectors, error, isLoading, pendingConnector],
  );

  const { disconnect } = useDisconnect();

  // click for wallet
  const walletClickHandle = useCallback(() => {
    expand && setExpand(false);

    if (isConnected && address) {
      disconnect();
    } else {
      walletModalRef.current = showConnectWalletDialog(connectConf);
    }
  }, [address, connectConf, disconnect, expand, isConnected]);

  useEffect(() => {
    if (walletModalRef.current) {
      const { update } = walletModalRef.current;
      typeof update === "function" && update(connectConf);
    }
  }, [connectConf]);

  useEffect(() => {
    if (error) {
      console.log("[LOG.error]", error.message);
    }
  }, [error]);

  const onMouseEnterWallet = () => {
    changeWalletPopover(true);
  };

  const onMouseLeaveWallet = () => {
    changeWalletPopover(false);
  };

  const viewDetailClickHandle = useCallback(() => {
    showUserGuideDialog();
  }, []);

  const titleList = [
    "mint",
    "perks",
    "roadmap",
    "partners",
    "featuredOn",
    "FAQ",
  ];

  const storyList = ["origin", "turningPoint", "decision", "exploration"];

  const titleButton = (title: string) => (
    <button
      type="button"
      className="ml-8 hidden font-TripGeom-Bold text-lg hover:text-white md:block"
      onClick={(e) => {
        e.currentTarget.blur();
        expand && setExpand(false);
        onClickAnchorLabel(title);
      }}
    >
      {t_common(title)}
    </button>
  );

  const menuItem = (title: string) => (
    <MenuItem
      value={t_common(title)}
      onClick={() => {
        setExpand(false);
        onClickAnchorLabel(title);
      }}
    />
  );
  return (
    <>
      <nav className="fixed left-0 right-0 z-40 m-auto flex h-16 w-full max-w-screen-lg flex-nowrap items-center justify-center border-[3px] border-[#FFD266] bg-[#FFD266] lg:rounded-b-[6.25rem] lg:border-black">
        <button
          type="button"
          className="ml-2 box-border h-[34px] w-[92px] md:ml-8 lg:ml-[50px]"
          onClick={(e) => {
            e.currentTarget.blur();
            window.location.href = root;
            if (expand) {
              setExpand(false);
            }
          }}
        >
          <img src={"/logo.svg"} alt="logo" className="block h-full w-full" />
        </button>
        <div className="ml-6 mr-2 flex flex-1 flex-nowrap items-center justify-end md:ml-12 md:mr-8 md:justify-center lg:mr-[50px]">
          {/* big screen */}
          {page === "home" && titleList.map((title) => titleButton(title))}
          {page === "story" && storyList.map((title) => titleButton(title))}
          <button
            type="button"
            className="ml-auto mr-2 hidden font-TripGeom-Regular text-base md:block"
            onClick={(e) => {
              e.currentTarget.blur();
              expand && setExpand(false);
            }}
          >
            {t_common("en")}
          </button>
          {!expand && (
            <Popover
              className="relative"
              onMouseEnter={() => onMouseEnterWallet()}
              onMouseLeave={() => onMouseLeaveWallet()}
            >
              <Popover.Button
                className="flex mobile:mb-[2px]"
                onClick={walletClickHandle}
              >
                <Wallet
                  isLoading={isLoading}
                  className="mx-3 font-TripGeom-Regular mobile:mr-4"
                />
              </Popover.Button>
              {isWalletPopoverOpen && (
                <div>
                  <div className="triangle absolute left-[68px] top-[22px] hidden md:block"></div>
                  <div className="absolute h-4 w-nav-wallet" />
                  <Popover.Panel
                    className="-left-wallet-pop absolute z-10 mt-4 hidden h-wallet-pop w-wallet-pop rounded-full bg-black px-6 pt-2 font-TripGeom-Regular text-sm opacity-70 md:block"
                    static
                  >
                    <span className="text-white">{t_common("no_wallet")}</span>
                    <span
                      className="ml-2 cursor-pointer text-wallet-detail underline"
                      onClick={viewDetailClickHandle}
                    >
                      {t_common("view_details")}
                    </span>
                  </Popover.Panel>
                </div>
              )}
            </Popover>
          )}
          <button
            type="button"
            className="ml-2 hidden md:block"
            aria-label="Twitter-icon"
            onClick={(e) => {
              e.currentTarget.blur();
              expand && setExpand(false);
              window.open("https://twitter.com/TrekkiNFT", "_blank");
            }}
          >
            <Twitter className="fill-black hover:fill-white focus:fill-white active:fill-white" />
          </button>
          <button
            type="button"
            aria-label="Discord-icon"
            className="ml-2 hidden md:block "
            onClick={(e) => {
              e.currentTarget.blur();
              expand && setExpand(false);
              window.open("https://discord.gg/jHdvardwAp", "_blank");
            }}
          >
            <Discord className="fill-black hover:fill-white focus:fill-white active:fill-white" />
          </button>

          {/* small screen  */}
          <ExpandButton
            className="md:hidden"
            expand={expand}
            onToggle={(expand: boolean) => {
              setExpand(expand);
            }}
          />
          <MenuModal
            open={expand}
            className="box-border h-full w-full bg-[#FFD266]"
            onClose={() => {
              setExpand(false);
            }}
          >
            <div className="flex h-full w-full flex-col pt-4">
              {page === "home" && titleList.map((title) => menuItem(title))}
              {page === "story" && storyList.map((title) => menuItem(title))}
              <WalletItem onClick={walletClickHandle} isLoading={isLoading} />
              <MenuItem
                value={"Twitter"}
                onClick={() => {
                  setExpand(false);
                  window.open("https://twitter.com/TrekkiNFT", "_blank");
                }}
              />
              <MenuItem
                value={"Discord"}
                onClick={() => {
                  setExpand(false);
                  window.open("https://discord.gg/jHdvardwAp", "_blank");
                }}
              />
            </div>
          </MenuModal>
        </div>
      </nav>
      {page === "story" && !isDesktop && <div className="h-16" />}
    </>
  );
};

export default Header;
