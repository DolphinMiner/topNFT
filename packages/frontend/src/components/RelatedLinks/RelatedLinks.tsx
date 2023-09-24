import { Discord } from "../Discord";
import { Twitter } from "../Twitter";

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

const PLATFORM_LIST = [twitter, discord] as const;

export const RelatedLinks = () => {
  return (
    <div className="right-0 top-64 hidden flex-col rounded bg-[#f8f9fa] shadow-md sm:fixed sm:flex">
      {PLATFORM_LIST.map(({ name, url, component: Icon }) => {
        return (
          <button
            key={name}
            className="flex h-12 w-12 items-center justify-center hover:bg-blue-50"
            onClick={() => {
              console.log({ name, url });
            }}
          >
            <Icon
              width={32}
              height={32}
              className="fill-[#1531f5] hover:fill-[#1531f5]"
            />
          </button>
        );
      })}
    </div>
  );
};
