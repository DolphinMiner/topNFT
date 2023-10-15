import { Header, NEED_ANCHOR } from "@/components/Header";
import { RelatedLinks } from "@/components/RelatedLinks/RelatedLinks";
import { HEADER_HEIGHT } from "@/constants/css";
import {
  About,
  Home,
  Mint,
  Roadmap,
  Team,
  Utilities,
} from "@/components/SubPage";

const SUBPAGE = {
  HOMEPAGE: Home,
  ABOUT: About,
  ROADMAP: Roadmap,
  UTILITIES: Utilities,
  TEAM: Team,
  MINT: Mint,
} as const;

export function Index() {
  return (
    <div className="mx-auto flex min-h-screen max-w-5xl flex-col bg-[#3394f2]">
      <Header />
      <RelatedLinks />
      {NEED_ANCHOR.map((anchor) => {
        const SubPage = SUBPAGE[anchor];
        return (
          <div
            key={anchor}
            className={`flex min-h-screen`}
            style={{ paddingTop: HEADER_HEIGHT }}
          >
            <div className="flex w-full p-0" id={anchor}>
              <SubPage />
            </div>
          </div>
        );
      })}
    </div>
  );
}
