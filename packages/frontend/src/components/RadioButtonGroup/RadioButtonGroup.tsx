import classNames from "classnames";
import RadioItem from "../RadioItem";

interface RadioButtonGroupOptionProps {
  value: string;
  label: string;
}

interface RadioButtonGroupProps {
  className?: string;
  selectedOption: string;
  handleOptionChange: (event?: any) => void;
  name: string;
  options: RadioButtonGroupOptionProps[];
}

export const RadioButtonGroup = ({
  selectedOption,
  handleOptionChange,
  name,
  options,
  className,
}: RadioButtonGroupProps) => {
  return (
    <div
      className={classNames(["flex sm:gap-x-10", className ? className : ""])}
    >
      {options.map((option) => (
        <RadioItem
          key={option.value}
          name={name}
          value={option.value}
          label={option.label}
          selectedOption={selectedOption}
          onChange={handleOptionChange}
        />
      ))}
    </div>
  );
};
