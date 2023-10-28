const TEXT = [
  {
    title: "STAN",
    desc: "5555 nfts in a mix of retro and sci-f styles. ACT-learning, discovery, growth in web3.",
  },
  {
    title: "HULK",
    desc: "STAN’s bro, when combined with a STAN can evolve into a new form.",
  },
  {
    title: "STAN & HULK",
    desc: "Build IP rights, toys finish, contribute upgrade brand and protect our holders.",
  },
];

export const Roadmap = () => {
  return (
    <div className="flex w-full items-end justify-around px-16">
      <div className="w-[320px]">
        <div className="flex flex-col items-center text-white">
          <div className="pb-1 text-xl text-[#fff056]">{TEXT[0].title}</div>
          <div className="pb-5 text-center text-base">{TEXT[0].desc}</div>
        </div>
        <div className="mx-auto h-[250px] w-[282px]">
          <img
            className="block h-full w-full"
            src="/roadmapAvatar1.png"
            alt="roadmap-avatar1"
          />
        </div>
      </div>

      <div className="mb-[100px] h-[50px] w-[50px] bg-black">
        <img
          className="block h-full w-full"
          src="/roadmapPlus.png"
          alt="roadmap-plus"
        />
      </div>

      <div className="w-[320px]">
        <div className="flex flex-col items-center text-white">
          <div className="pb-1 text-xl text-[#fff056]">{TEXT[1].title}</div>
          <div className="pb-14 text-center text-base">{TEXT[1].desc}</div>
        </div>
        <div className="mx-auto h-[280px] w-[320px]">
          <img
            className="block h-full w-full"
            src="/roadmapAvatar2.png"
            alt="roadmap-avatar2"
          />
        </div>
      </div>

      <div className="mb-[112px] h-[26px] w-[72px] bg-white">
        <img
          className="block h-full w-full"
          src="/roadmapEqual.png"
          alt="roadmap-equal"
        />
      </div>

      <div className="w-[320px]">
        <div className="flex flex-col items-center text-white">
          <div className="pb-1 text-xl text-[#fff056]">{TEXT[2].title}</div>
          <div className="pb-14 text-center text-base">{TEXT[2].desc}</div>
        </div>
        <div className="mx-auto h-[380px] w-[320px]">
          <img
            className="block h-full w-full"
            src="/roadmapAvatar3.png"
            alt="roadmap-avatar3"
          />
        </div>
      </div>
    </div>
  );
};
