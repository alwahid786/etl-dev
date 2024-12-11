/* eslint-disable react/prop-types */
import Button from "../../../../../components/shared/small/Button";

const Third = ({ setCurrentStep }) => {
  const handleConvert = () => {
    alert("Covert Handler Button");
  };

  return (
    <div className="space-y-3">
      <div className="md:border-[1px] md:p-3 rounded-lg space-y-3 h-[40vh]">
        <Button
          text="Convert"
          width="w-full md:w-[128px]"
          bg="bg-secondaryGray text-white border-secondaryGray hover:text-secondaryGray hover:bg-transparent"
          onClick={handleConvert}
        />
        <p className="text-xs md:text-sm text-gray-500">Id After Conversion</p>
      </div>

      <div className="flex md:flex-row flex-col items-center justify-end gap-2 md:gap-4">
        <Button
          type="button"
          text="Back"
          width="w-full md:w-[128px]"
          variant="outlined"
          onClick={() => setCurrentStep((prevStep) => prevStep - 1)}
        />
        <Button
          type="button"
          text="Next"
          width="w-full md:w-[128px]"
          onClick={() => {
            setCurrentStep((prevStep) => prevStep + 1);
          }}
        />
      </div>
    </div>
  );
};

export default Third;
