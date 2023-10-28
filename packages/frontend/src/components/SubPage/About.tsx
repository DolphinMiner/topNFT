const TITLE1 = `MEET THE S.T.A.N`;
const TEXT_LIST1 = [
  `S.T.A.N focuses on retro and sci-f art.`,
  `S.T.A.N focuses S.T.A.N focuses on retro and sci-f art.`,
  `We believe that within chaos lies the seed of innovation, and innovation makes`,
];

const TITLE2 = `STAN NFT COLLECTION`;
const TEXT_LIST2 = [
  `STANVERSE hosts 5,555 unique STAN in a mix of retro and sci-f styles.`,
  `This fusion is reflected through their skin to clothing, head, eye and gear.`,
  `Each STAN has a whole mood on their own, rocking their unique style, rocking their unique`,
];

export const About = () => {
  return (
    <div className="flex w-full flex-col items-center justify-around px-16">
      <div className="flex h-full w-[1024px] flex-row items-center justify-between">
        <div className="flex flex-row items-start">
          <div className="flex flex-col">
            <div className="box-content h-[190px] w-[190px] py-3">
              <img
                className="block h-full w-full"
                src="/aboutAvatar0.png"
                alt="about-avatar0"
              />
            </div>
            <div className="box-content h-[190px] w-[190px] py-3">
              <img
                className="block h-full w-full"
                src="/aboutAvatar2.png"
                alt="about-avatar2"
              />
            </div>
          </div>
          <div className="-ml-[1px] mt-[118px] flex flex-row items-center justify-center">
            <div className="box-content h-[190px] w-[190px] py-3">
              <img
                className="block h-full w-full"
                src="/aboutAvatar1.png"
                alt="about-avatar1"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-around text-white">
          <div className="flex flex-col items-end">
            <div className="mb-8 text-2xl text-[#fff056] [text-shadow:_0_2px_4px_black]">
              {TITLE1}
            </div>
            {TEXT_LIST1.map((text, index) => (
              <div
                key={index}
                className="mb-6 text-base [text-shadow:_0_1px_2px_black]"
              >
                {text}
              </div>
            ))}
          </div>

          <div className="flex flex-col items-end">
            <div className="mb-6 text-2xl text-[#fff056] [text-shadow:_0_2px_4px_black]">
              {TITLE2}
            </div>
            {TEXT_LIST2.map((text, index) => (
              <div
                key={index}
                className="mb-4 text-base [text-shadow:_0_1px_2px_black]"
              >
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
