import { Header, NEED_ANCHOR } from "@/components/Header";
import { RelatedLinks } from "@/components/RelatedLinks/RelatedLinks";
import { HEADER_HEIGHT } from "@/constants/css";

export function Index() {
  return (
    <div className="mx-auto flex min-h-screen max-w-5xl flex-col bg-[#3394f2]">
      <Header />
      <RelatedLinks />
      {NEED_ANCHOR.map((anchor) => {
        return (
          <div
            key={anchor}
            className={`flex min-h-screen`}
            style={{ paddingTop: HEADER_HEIGHT }}
          >
            <div className="flex w-full p-0" id={anchor}>
              <div className="w-full bg-red-50 p-0 text-white">{anchor}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
