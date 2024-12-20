/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import { GoChevronDown } from "react-icons/go";

const Dropdown = ({
  options = [],
  defaultText = "Select",
  onSelect,
  label,
  readOnly = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const dropdownRef = useRef(null);

  const selectHandler = (option) => {
    if (readOnly) return;
    setSelected(option);
    setIsOpen(false);
    if (onSelect) onSelect(option);
    console.log("Selected Option:", option);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {label && (
        <label className="text-xs md:text-sm text-black mb-2 font-[400] block">
          {label}
        </label>
      )}
      <button
        type="button"
        className={`w-full h-[45px] px-4 border ${
          readOnly ? "cursor-not-allowed" : "border-[#E0E0E9]"
        } rounded-lg text-sm text-[#383838E5] flex items-center justify-between`}
        onClick={() => !readOnly && setIsOpen(!isOpen)}
        disabled={readOnly}
      >
        <span className="text-sm text-[#383838E5]">
          {selected ? selected.option : defaultText}
        </span>
        <div
          className={`transition-all duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <GoChevronDown
            fontSize={20}
            color={readOnly ? "#999999" : "#292D3280"}
          />
        </div>
      </button>
      {isOpen && !readOnly && (
        <ul className="absolute z-10 w-full h-fit rounded-md shadow-md cursor-pointer border-y mt-1 bg-white">
          {options.map((option, i) => (
            <li
              className="py-2 text-sm px-4 border-b hover:bg-[hsl(208,100%,95%)]"
              key={i}
              onClick={() => selectHandler(option)}
            >
              {option.option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
