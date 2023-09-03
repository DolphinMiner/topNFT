import { Popover } from "@headlessui/react";
import { useState } from "react";
import Discord from "../Discord";
import Twitter from "../Twitter";
import Wallet from "../Wallet";

// import i18next from "i18next";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import { languages } from "@/i18n";

const NavigationBar = () => {
  // const [isOpenseaPopoverOpen, changeOpenseaPopover] = useState(false);
  const [isWalletPopoverOpen, changeWalletPopover] = useState(false);
  // const Opensea = () => {
  //   return (
  //     <svg width="26px" height="26px" viewBox="0 0 26 26" version="1.1">
  //       <g
  //         id="页面-1"
  //         stroke="none"
  //         stroke-width="1"
  //         fill="none"
  //         fill-rule="evenodd"
  //       >
  //         <g id="OPENSEA备份">
  //           <rect id="矩形备份-18" x="0" y="0" width="26" height="26"></rect>
  //           <g
  //             id="OpenSea-fill"
  //             transform="translate(1.083333, 2.708333)"
  //             className="fill-black hover:fill-white"
  //             fill-rule="nonzero"
  //           >
  //             <path
  //               d="M0.911332232,11.0791668 L0.998564189,10.9559288 L6.25740618,3.56052796 C6.29274043,3.51036257 6.35586976,3.48170155 6.42174934,3.48591538 C6.48762892,3.49012921 6.54560895,3.5265367 6.57268744,3.58069418 C7.45123805,5.3508401 8.21015624,7.55231906 7.85499748,8.92250165 C7.70296462,9.4871558 7.28798965,10.2501111 6.82067549,10.9559288 C6.7599232,11.059125 6.693803,11.1596939 6.62253429,11.2573017 C6.58904165,11.3019203 6.53286434,11.3284355 6.47299376,11.3278986 L1.06461128,11.3278986 C0.998496831,11.3286939 0.937243152,11.2967523 0.905198537,11.2447554 C0.873153921,11.1927585 0.875510768,11.1291318 0.911332232,11.0791668 L0.911332232,11.0791668 Z"
  //               id="路径"
  //             ></path>
  //             <path
  //               d="M23.8333333,12.8099653 L23.8333333,13.9734954 C23.8333333,14.0397108 23.7910358,14.0995487 23.7260833,14.1260347 C23.3364083,14.2819143 22.004125,14.8531018 21.45,15.5734884 C20.0354917,17.4117546 18.9558417,20.0416667 16.5403333,20.0416667 L6.46479167,20.0416667 C2.89336667,20.0416667 0,17.3282477 0,13.9812893 L0,13.873287 C0,13.784213 0.077458324,13.7118403 0.172791676,13.7118403 L5.78911667,13.7118403 C5.90113335,13.7118403 5.98216667,13.8087083 5.97263335,13.9100301 C5.93211667,14.2518519 6.00004167,14.6003542 6.17283335,14.9176806 C6.50650002,15.5512199 7.19766667,15.9464861 7.94484167,15.9464861 L10.725,15.9464861 L10.725,13.9178241 L7.97582499,13.9178241 C7.9106505,13.9165798 7.85144634,13.8820669 7.82159898,13.8279183 C7.79175162,13.7737697 7.79606105,13.7086935 7.83282499,13.6583958 C7.86261667,13.6149722 7.89717499,13.5704352 7.93292499,13.520331 C8.19270832,13.175169 8.56450832,12.6396111 8.93392499,12.0283403 C9.18536667,11.6163727 9.42965832,11.1765694 9.62628334,10.7356528 C9.66680002,10.6554861 9.69778334,10.574206 9.72995834,10.4940393 C9.78358334,10.3526342 9.83959167,10.22125 9.87891667,10.0898657 C9.91824167,9.97852313 9.95041667,9.86161341 9.98259167,9.75138427 C10.0755417,9.37727316 10.1148667,8.9797801 10.1148667,8.5678125 C10.1148667,8.40636573 10.1077167,8.237125 10.0910333,8.07567823 C10.0806158,7.89875202 10.0623278,7.72230713 10.0362167,7.54680093 C10.0177537,7.38882842 9.99190959,7.23168541 9.95875834,7.07582177 C9.9169566,6.83875504 9.86367412,6.60358076 9.79907499,6.37102316 L9.77762499,6.28194907 C9.72995832,6.1205023 9.69063332,5.96573611 9.63462499,5.80428934 C9.48108325,5.31015887 9.30495228,4.82240215 9.10671667,4.34236111 C9.03640834,4.15864583 8.95775834,3.98272455 8.87791667,3.80568982 C8.76113335,3.54069444 8.64196667,3.29908104 8.53233335,3.07082871 C8.48021318,2.97323286 8.42975956,2.87486777 8.38099167,2.77577083 C8.32815864,2.66726745 8.27333388,2.55962038 8.21654167,2.45287732 C8.17721667,2.37382409 8.13074167,2.29922455 8.09975835,2.224625 L7.76013335,1.63896295 C7.73863799,1.60269691 7.74236417,1.55794769 7.76960414,1.52522435 C7.79684411,1.49250101 7.842347,1.47811141 7.88525835,1.48865045 L10.01,2.02643518 L10.0159583,2.02643518 L10.0243,2.02866205 L10.3043417,2.10103472 L10.6117917,2.18231482 L10.725,2.21237732 L10.725,1.03214583 C10.725,0.462071768 11.2135833,0 11.8177583,0 C12.11925,0 12.3933333,0.114682879 12.5899583,0.302851843 C12.7948985,0.497261195 12.9096353,0.759269999 12.909325,1.03214583 L12.909325,2.78356482 L13.1357417,2.84257639 C13.1536167,2.84814351 13.1714917,2.8559375 13.188175,2.86707177 C13.2429917,2.90604167 13.3228333,2.96393982 13.424125,3.03408566 C13.5039667,3.09309722 13.588575,3.16546992 13.69225,3.24006944 C13.8972167,3.39372222 14.1415083,3.59302545 14.4096333,3.82127778 C14.4811333,3.8780625 14.55025,3.9381875 14.6134083,3.99719907 C14.9589917,4.29782407 15.3462833,4.65078008 15.7157,5.04047917 C15.819375,5.1495949 15.9206667,5.2609375 16.0243417,5.37784722 C16.126825,5.49698379 16.2364583,5.61389351 16.3317917,5.73080323 C16.4569167,5.88668285 16.591575,6.04812962 16.70955,6.21625694 C16.7643667,6.29642361 16.8287167,6.37770371 16.8823417,6.45787038 C17.0324917,6.67164816 17.1659583,6.89210649 17.2934667,7.11256482 C17.3470917,7.215 17.4019083,7.3263426 17.449575,7.43545833 C17.5913833,7.73051621 17.7022083,8.03114121 17.7737083,8.33176621 C17.7951583,8.39745833 17.8118417,8.46760417 17.8189917,8.53106944 L17.8189917,8.54554399 C17.842825,8.63461806 17.8511667,8.72925927 17.8595083,8.82612732 C17.9073854,9.27063347 17.8483497,9.71951832 17.6867167,10.1399699 C17.63905,10.265787 17.5913833,10.3971713 17.5294167,10.521875 C17.41025,10.7801898 17.2696333,11.0373912 17.1028,11.2790046 C17.049175,11.3680787 16.984825,11.4627199 16.9216667,11.551794 C16.85255,11.6464352 16.78105,11.7355093 16.7167,11.8223565 C16.6297083,11.9336991 16.5367583,12.0506088 16.441425,12.1552708 C16.3585385,12.2649844 16.2690179,12.3701887 16.1733,12.4703704 C16.0398333,12.6173426 15.912325,12.7565208 15.78005,12.8901319 C15.7000383,12.9790296 15.6157401,13.0644805 15.5274167,13.1462199 C15.4416167,13.235294 15.354625,13.3143472 15.2747833,13.3889468 C15.1648694,13.4915752 15.0524254,13.5918104 14.9375417,13.6895718 L14.7194667,13.8766273 C14.6867932,13.9032778 14.6448636,13.9179196 14.6014917,13.9178241 L12.909325,13.9178241 L12.909325,15.9464861 L15.0388333,15.9464861 C15.5155,15.9464861 15.9683333,15.7883796 16.334175,15.4988889 C16.4593,15.3964537 17.0050833,14.955537 17.6509667,14.2885949 C17.6726078,14.2662891 17.7007856,14.2504151 17.732,14.2429444 L23.612875,12.6540857 C23.6651128,12.6405556 23.7211153,12.6505482 23.7643409,12.6811117 C23.8075666,12.7116753 23.8330756,12.7593172 23.8333333,12.8099653 L23.8333333,12.8099653 Z"
  //               id="路径"
  //             ></path>
  //           </g>
  //         </g>
  //       </g>
  //     </svg>
  //   );
  // };
  // const onMouseEnterOpensea = () => {
  //   changeOpenseaPopover(true);
  // };
  // const onMouseLeaveOpensea = () => {
  //   changeOpenseaPopover(false);
  // };

  // const { t, language } = i18next;
  // const router = useRouter();
  // const asPath = router.asPath;

  const onMouseEnterWallet = () => {
    changeWalletPopover(true);
  };

  const onClickAnchorLabel = (anchor: string) => {
    const anchorElement = document.querySelector(
      `#${anchor}`,
    ) as HTMLAnchorElement | null;
    const offsetHeight = 92;
    if (anchorElement) {
      window.scrollTo({
        behavior: "smooth",
        top: anchorElement.offsetTop - offsetHeight,
      });
    }
  };

  const onMouseLeaveWallet = () => {
    changeWalletPopover(false);
  };
  return (
    <>
      <nav className="fixed left-0 right-0 z-10 m-auto flex h-16 w-[1160px] justify-center rounded-b-nav border-[3px] border-black bg-[#FFE094] text-black">
        <div className="flex h-[55px] w-[1148px] items-center justify-between rounded-b-nav bg-nav-bg px-12">
          <div className="flex w-nav-list">
            <img src={"./logo.svg"} alt="logo" />
            <div className="ml-12 flex w-10/12 items-center justify-between font-TripGeom-Bold text-lg">
              <a
                onClick={() => {
                  onClickAnchorLabel("mint");
                }}
                className="cursor-pointer hover:text-white"
              >
                Mint
              </a>
              <a
                className="cursor-pointer hover:text-white"
                onClick={() => {
                  onClickAnchorLabel("partners");
                }}
              >
                Partners
              </a>
              <a className="opacity-0">Bonus</a>
              <a className="opacity-0">Road Map</a>
              <a className="opacity-0">FAQ</a>
            </div>
          </div>
          <div className="flex w-nav items-center justify-between font-TripGeom-Regular">
            <div>
              English
              {/* <Popover className="relative w-language">
              <Popover.Button>{t(language)}</Popover.Button>
              <Popover.Panel className="absolute z-10 w-20 bg-black text-white opacity-70">
                {languages
                  .filter((l) => language !== l)
                  .map((l, index) => {
                    return (
                      <div key={l}>
                        <Link href={asPath.replace(`/${language}`, `/${l}`)}>
                          {t(l)}
                        </Link>
                      </div>
                    );
                  })}
              </Popover.Panel>
            </Popover> */}
            </div>
            <Popover
              className="relative"
              onMouseEnter={() => onMouseEnterWallet()}
              onMouseLeave={() => onMouseLeaveWallet()}
            >
              <Popover.Button className="flex">
                <Wallet />
              </Popover.Button>
              {isWalletPopoverOpen && (
                <div>
                  <div className="triangle absolute left-14 top-6"></div>
                  <div className="absolute h-4 w-nav-wallet" />
                  <Popover.Panel
                    className="-left-wallet-pop absolute z-10 mt-4 h-wallet-pop w-wallet-pop rounded-full bg-black px-4 pt-2 font-TripGeom-Regular text-sm opacity-70"
                    static
                  >
                    <text className="text-white">
                      No wallet? No worries, let me show you how to set up your
                      very own wallet and adopt your first Trekki!
                    </text>
                    <text className="ml-2 cursor-pointer text-wallet-detail underline">
                      View Details
                    </text>
                  </Popover.Panel>
                </div>
              )}
            </Popover>
            <div className="flex w-nav-icon items-center justify-between">
              <div
                onClick={() => {
                  window.open("https://twitter.com/TrekkiNFT");
                }}
                className="cursor-pointer"
              >
                <Twitter />
              </div>
              <div
                onClick={() => {
                  window.open("https://discord.gg/jHdvardwAp");
                }}
                className="cursor-pointer"
              >
                <Discord />
              </div>
              {/* <div
              onMouseEnter={() => onMouseEnterOpensea()}
              onMouseLeave={() => onMouseLeaveOpensea()}
            >
              <Popover className="relative">
                <Popover.Button className="flex">
                  <Opensea />
                </Popover.Button>
                {isOpenseaPopoverOpen && (
                  <div>
                    <Popover.Panel
                      className="absolute -left-14 z-10 mt-3 flex h-8 w-nav-opensea items-center justify-center rounded-full bg-black opacity-70"
                      static
                    >
                      <text className="font-TripGeom-Regular text-sm text-white">
                        View on Opensea
                      </text>
                    </Popover.Panel>
                  </div>
                )}
              </Popover>
            </div> */}
            </div>
          </div>
        </div>
      </nav>
      <div className="h-16 w-full" />
    </>
  );
};

export default NavigationBar;
