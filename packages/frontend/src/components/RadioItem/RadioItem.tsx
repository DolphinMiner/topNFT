interface RadioItemProps {
  selectedOption: string;
  value: string;
  label: string;
  onChange: (event?: any) => void;
  name: string;
}

export const RadioItem = ({
  selectedOption,
  value,
  label,
  onChange,
  name,
}: RadioItemProps) => {
  return (
    <label>
      <input
        type="radio"
        name={name}
        required
        value={value}
        checked={selectedOption === value}
        onChange={onChange}
      />
      <span className="ml-2 font-TripGeom-Regular text-sm">{label}</span>
    </label>
  );
};
