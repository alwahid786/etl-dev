/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Button from "../../../../../components/shared/small/Button";
import Dropdown from "../../../../../components/shared/small/Dropdown";
import { dropdownData, inputBucketData } from "../../../../../data/data";

const First = ({ setCurrentStep, apiUrl }) => {
  const [selectedValues, setSelectedValues] = useState({
    inputBucket: "",
    outputBucket: "",
    edi: "",
  });
  const [dropdownOptions, setDropdownOptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const apiUrl = "your API Link here and then uncomment this ";
        if (apiUrl) {
          setLoading(true);
          setError("");
          const response = await fetch(apiUrl);
          if (!response.ok) throw new Error("Failed to fetch data");

          const data = await response.json();

          const options = data.map((bucket) => ({
            option: bucket.Name,
            creationDate: bucket.CreationDate,
          }));
          setDropdownOptions(options);
        } else {
          const fallbackOptions = inputBucketData.map((bucket) => ({
            option: bucket.Name,
            creationDate: bucket.CreationDate,
          }));
          setDropdownOptions(fallbackOptions);
        }
      } catch (err) {
        setError(err.message || "An error occurred while fetching data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]);

  const handleSubmit = () => {
    console.log("Selected Values:", selectedValues);
    setCurrentStep((prevStep) => prevStep + 1);
  };
  const handleDropdownChange = (dropdownKey, value) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [dropdownKey]: value.option,
    }));
  };

  return (
    <div className="space-y-3">
      <div className="flex flex-col justify-center gap-5 h-[40vh] ">
        {loading ? (
          <p>Loading dropdown options...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <>
            <Dropdown
              options={dropdownOptions}
              label="Input Bucket"
              onSelect={(value) => handleDropdownChange("inputBucket", value)}
            />
            <Dropdown
              options={dropdownData}
              label="Output Bucket"
              onSelect={(value) => handleDropdownChange("outputBucket", value)}
            />
            <Dropdown
              options={dropdownData}
              label="EDI"
              onSelect={(value) => handleDropdownChange("edi", value)}
            />
          </>
        )}
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
