/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border rounded-lg mb-4 overflow-hidden">
      <div
        className="bg-gray-100 flex justify-between items-center p-4 cursor-pointer hover:bg-gray-200"
        onClick={toggleAccordion}
      >
        <h3 className="text-lg font-medium">{title}</h3>
        <span
          className={`text-xl font-bold transition-transform flex items-center justify-center ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <FaChevronDown fontSize={15} />
        </span>
      </div>
      <div
        className={`transition-max-height duration-300 ease-in-out ${
          isOpen ? "max-h-screen" : "max-h-0"
        } overflow-hidden`}
      >
        <div className="p-4 bg-white text-gray-700">{children}</div>
      </div>
    </div>
  );
};

export default Accordion;
