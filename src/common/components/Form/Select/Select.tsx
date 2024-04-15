import { SelectHTMLAttributes, memo } from "react";

import { SelectOption } from "../interface";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  id: string;
  label: string;
  options: SelectOption[];
}

const Select = ({ id, label, options, ...props }: SelectProps) => {
  return (
    <div className="flex flex-col space-y-2.5 text-sm">
      <label className="" htmlFor={id}>
        {label}
      </label>
      <select
        className="block border-2 border-gray-100 px-3 py-2 outline-none focus:border-gray-200"
        id={id}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default memo(Select);
