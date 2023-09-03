type MenuItemProps = {
  value: string;
  onClick?: () => void;
};
const MenuItem = ({ value, onClick }: MenuItemProps) => {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.currentTarget.blur();
        typeof onClick === "function" && onClick();
      }}
      className="mx-6 flex h-20 items-center justify-center px-1 text-left font-TripGeom-Medium text-2xl text-black hover:bg-[#fcc540] hover:text-white focus:bg-[#fcc540] active:bg-[#fcc540]"
    >
      {value}
    </button>
  );
};

export default MenuItem;
