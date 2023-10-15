const TEXT_LIST = [
  `"Help! Who’s got my back?” "Help! Who’s got my back?”`,
  `"Help! Who’s got my back?” "Help! Who’s got my back?” "Help! Who’s got`,
  `"Help! Who’s got my back?” "Help! Who’s got my back?” "Help! Who’s got my back?”`,
  `"Help! Who’s got my back?” "Help! Who’s got my back?” "Help! Who’s got my back?” "Help! Who’s`,
  `"Help! Who’s got my back?” "Help! Who’s got my back?” "Help! Who’s got my back?” "Help! Who’s got my back?”`,
  `"Help! Who’s got my back?” "Help! Who’s got my back?” "Help! Who’s got my back?” "Help! Who’s got my back?”`,
];

export const Home = () => {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex flex-col text-white">
        <div className="mb-8 text-2xl text-[#fff056] [text-shadow:_0_2px_4px_black]">{`THE STORY OF STAN`}</div>
        {TEXT_LIST.map((text, index) => (
          <div
            key={index}
            className="mb-6 text-lg [text-shadow:_0_1px_2px_black]"
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
};
