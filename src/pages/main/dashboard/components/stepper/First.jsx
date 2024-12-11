/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "../../../../../components/shared/small/Button";
import Dropdown from "../../../../../components/shared/small/Dropdown";
import { dropdownData } from "../../../../../data/data";

const First = ({ setCurrentStep }) => {
  const [selectedValues, setSelectedValues] = useState({
    dropdown1: "",
    dropdown2: "",
    dropdown3: "",
  });

  //  ================================================ SUBMIT DATA HANDLER
  const handleSubmit = () => {
    console.log("Selected Values:", selectedValues);
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handleDropdownChange = (dropdownKey, value) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [dropdownKey]: value,
    }));
  };

  return (
    <div className="space-y-3">
      <div className="flex flex-col justify-center gap-5 h-[40vh] ">
        <Dropdown
          // below {dropdownData}, this is coming from another file which is data.js and i import this is in top , you just import your api in top after this you have to write below to access api data in place of dropdownData, then you can see the list data of api in this dropdown, access api like this wherever you show the data of api
          options={dropdownData}
          label="Input Bucket"
          onSelect={(value) => handleDropdownChange("Input Bucket", value)}
        />
        <Dropdown
          options={dropdownData}
          label="Output Bucket"
          onSelect={(value) => handleDropdownChange("Output Bucket", value)}
        />
        <Dropdown
          options={dropdownData}
          label="EDI"
          onSelect={(value) => handleDropdownChange("EDI", value)}
        />
      </div>
      <div className="flex md:flex-row flex-col items-center justify-end gap-2 md:gap-4">
        <Button
          type="button"
          text="Next"
          width="w-full md:w-[128px]"
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
};

export default First;
