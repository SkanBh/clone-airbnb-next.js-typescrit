import React from "react";
import { IconContext } from "react-icons";
import { FaSearch, FaTimes } from "react-icons/fa";
interface Props {
  classes?: string;
  value?: string;
  defaultValue?: string;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  handleClear?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  displayClearButton?: boolean;
}
const InputSearch = ({
  classes,
  value,
  defaultValue,
  handleChange,
  handleFocus,
  handleClear,
  displayClearButton,
}: Props) => {
  return (
    <div className={`relative ${classes}`}>
      <input
        defaultValue={defaultValue}
        value={value}
        placeholder="Search destinations"
        type="text"
        className="h-[60px] border border-gray-200 rounded-lg w-full indent-14 placeholder:text-gray-300 outline-none"
        onFocus={handleFocus}
        onChange={handleChange}
      />
      <span className="absolute left-7 top-[36%] mt-[2px]">
        <FaSearch />
      </span>
      {displayClearButton && value && (
        <button
          className="h-4 w-4 absolute right-4 top-[36%] mt-[2px] bg-gray-300 rounded-full grid place-items-center"
          onClick={handleClear}
        >
          <IconContext.Provider value={{ className: "h-3 w-3" }}>
            <FaTimes />
          </IconContext.Provider>
        </button>
      )}
    </div>
  );
};

export default InputSearch;
