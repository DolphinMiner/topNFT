import { Header, NEED_ANCHOR } from "@/components/Header";
import { RelatedLinks } from "@/components/RelatedLinks/RelatedLinks";

export function HomePage() {
  return (
    <div className="mx-auto flex min-h-screen max-w-5xl flex-col bg-[#3394f2]">
      <Header />
      <RelatedLinks />
      {NEED_ANCHOR.map((anchor) => {
        return (
          <div key={anchor} className="flex min-h-screen pt-24">
            <div className="flex w-full p-16" id={anchor}>
              <div className="w-full rounded-lg bg-[#1531f5] p-8 text-white">
                {anchor}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
