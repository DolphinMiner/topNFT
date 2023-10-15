import { Discord } from "../Discord";
import { Instagram } from "../Instagram";
import { OpenSea } from "../OpenSea";
import { Twitter } from "../Twitter";

const opensea = {
  name: "opensea",
  url: "",
  component: OpenSea,
} as const;
const instagram = {
  name: "instagram",
  url: "",
  component: Instagram,
} as const;
const twitter = {
  name: "twitter",
  url: "",
  component: Twitter,
} as const;
const discord = {
  name: "discord",
  url: "",
  component: Discord,
} as const;

const PLATFORM_LIST = [opensea, instagram, twitter, discord] as const;

export const RelatedLinks = () => {
  return (
    <div className="right-0 top-64 hidden flex-col rounded bg-transparent sm:fixed sm:flex">
      {PLATFORM_LIST.map(({ name, url, component: Icon }) => {
        return (
          <button
            key={name}
            className="flex h-12 w-12 items-center justify-center"
            onClick={() => {
              console.log({ name, url });
            }}
          >
            <Icon
              width={32}
              height={32}
              className="drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)]"
            />
          </button>
        );
      })}
    </div>
  );
};
