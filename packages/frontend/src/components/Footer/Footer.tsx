import IconButton from "@/components/IconButton";
import { imgUrl } from "@/constants/url";
import { t_common } from "@/i18n";

interface IProps {
  page: string;
  isDesktop?: boolean;
}

const Footer = ({ page, isDesktop }: IProps) => {
  // story 的底部草丛
  const storySrc = isDesktop
    ? `${imgUrl}/story-page/image_grass.png`
    : `${imgUrl}/story-page/image_h5_grass.png`;
  return (
    <>
      {page === "story" && <img data-src={storySrc} className="lazy w-full" />}
      <footer className="flex flex-col items-center justify-center bg-[#FFD266] px-8 pb-4 pt-8 sm:w-full">
        <img
          alt="footerTip"
          data-src={`${imgUrl}/footer.png`}
          className="lazy mx-auto h-20 w-[314px]"
        />
        <div className="mx-auto mb-6 mt-6 flex w-full justify-between text-center">
          <div className="mx-auto mb-6 flex max-w-[300px] flex-wrap justify-center text-center md:max-w-[632px]">
            <div className="mt-6 flex w-[360px] justify-between  md:mr-[48px]">
              <IconButton
                onClick={() => {
                  window.open("https://www.instagram.com/trekkinft", "_blank");
                }}
              >
                <img
                  alt="twitter"
                  src={"/instagram.svg"}
                  className="m-auto mb-1 h-auto w-9"
                />
                <p className="font-TripGeom-Regular text-xs">
                  {t_common("instagram")}
                </p>
              </IconButton>
              <IconButton
                onClick={() => {
                  window.open("https://twitter.com/TrekkiNFT", "_blank");
                }}
              >
                <img
                  alt="twitter"
                  src={"/twitter.svg"}
                  className="m-auto mb-1 h-auto w-9"
                />
                <p className="font-TripGeom-Regular text-xs">
                  {t_common("twitter")}
                </p>
              </IconButton>
              <IconButton
                onClick={() => {
                  window.open("https://discord.gg/jHdvardwAp", "_blank");
                }}
              >
                <img
                  alt="discord"
                  src={"/discord.svg"}
                  className="m-auto mb-1 h-9 w-9"
                />
                <p className="font-TripGeom-Regular text-xs">
                  {t_common("discord")}
                </p>
              </IconButton>
            </div>
            <div className="mt-6 flex w-[196px] justify-between md:w-[224px]">
              <IconButton
                onClick={() => {
                  window.open("https://medium.com/@trekkinft", "_blank");
                }}
              >
                <img
                  alt="email"
                  src={"/medium.svg"}
                  className="m-auto mb-1 h-9 w-9"
                />
                <p className="font-TripGeom-Regular text-xs">
                  {t_common("medium")}
                </p>
              </IconButton>
              <IconButton
                onClick={() => {
                  window.open("mailto:tripnftcontact@trip.com", "_blank");
                }}
              >
                <img
                  alt="email"
                  src={"/email.svg"}
                  className="m-auto mb-1 h-9 w-9"
                />
                <p className="font-TripGeom-Regular text-xs">
                  {t_common("email")}
                </p>
              </IconButton>
            </div>
          </div>
        </div>
        <p className="font-TripGeom-Regular text-footer text-black">
          {t_common("copyright")}
        </p>
      </footer>
    </>
  );
};

export default Footer;
