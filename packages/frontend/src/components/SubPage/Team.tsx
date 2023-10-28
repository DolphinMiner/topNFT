const MEMBERS = [
  {
    avatar: "/teamAvatar0.png",
    name: "Founder",
    desc: "描述",
  },
  {
    avatar: "/teamAvatar0.png",
    name: "Co-Founder",
    desc: "描述",
  },
  {
    avatar: "/teamAvatar1.png",
    name: "Artist",
    desc: "描述",
  },
  {
    avatar: "/teamAvatar2.png",
    name: "Advisor",
    desc: "描述",
  },
  {
    avatar: "/teamAvatar2.png",
    name: "Advisor",
    desc: "描述",
  },
];

export const Team = () => {
  return (
    <div className="flex w-full flex-col items-center justify-around px-16">
      <div className="flex h-full w-[1024px] flex-col justify-center">
        <div className="mb-14 text-4xl text-[#fff056] [text-shadow:_0_2px_4px_black]">
          MEET THE TEAM
        </div>

        <div className="flex flex-row items-center justify-around">
          {MEMBERS.map(({ avatar, name, desc }, index) => (
            <div className="w-[142px] text-white" key={index}>
              <div className="h-[142px] w-[142px] shadow-lg shadow-black">
                <img
                  className="block h-full w-full"
                  src={avatar}
                  alt={avatar}
                />
              </div>
              <div className="mt-6 text-center text-[#d2d2d2]">{name}</div>
              <div className="mt-4 text-center">{desc}</div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center text-3xl text-[#fff056] [text-shadow:_0_2px_4px_black]">
          Not just a community, but a vast network of helping hands
        </div>
      </div>
    </div>
  );
};
