import { Header } from "@/components/Header";
import { RelatedLinks } from "@/components/RelatedLinks/RelatedLinks";

export function HomePage() {
  return (
    <div className="mx-auto flex min-h-screen max-w-5xl flex-col bg-[#f8f9fa]">
      <Header />
      <RelatedLinks />
      <div className="flex h-screen pt-16">
        <div className="w-full" id="Logo">
          Home
        </div>
      </div>
      <div className="flex h-screen pt-16">
        <div className="w-full" id="About">
          About
        </div>
      </div>
      <div className="flex h-screen pt-16">
        <div className="w-full" id="Roadmap">
          Roadmap
        </div>
      </div>
      <div className="flex h-screen pt-16">
        <div className="w-full" id="Team">
          Team
        </div>
      </div>
    </div>
  );
}
