/* eslint-disable react/prop-types */
import Button from "../../../../../components/shared/small/Button";

const Second = ({ setCurrentStep }) => {
  const handleValidate = () => {
    alert("Validate Button Handler");
  };

  const handleGetReports = () => {
    alert("Get Reports Button Handler");
  };
  return (
    <div className="space-y-3 ">
      <div className="h-[40vh] space-y-3">
        <div className="border-[1px] p-3 rounded-lg space-y-3">
          {/* adding a button handler ,which is trigger by clicking on it */}
          <Button
            text="Validate"
            bg="bg-secondaryGray text-white border-secondaryGray hover:text-secondaryGray hover:bg-transparent"
            width="w-full md:w-[128px]"
            onClick={handleValidate}
          />
          <p className="text-xs md:text-sm text-gray-500">Id</p>
        </div>
        <div className="border-[1px] p-3 rounded-lg space-y-3 overflow-y-auto custom-scroll h-[27vh]">
          <Button
            text="Get Reports"
            width="w-full md:w-[128px]"
            bg="bg-secondaryGray text-white border-secondaryGray hover:text-secondaryGray hover:bg-transparent"
            onClick={handleGetReports}
          />
          <div>
            <p className="text-xs md:text-sm text-gray-500">label</p>
            <p className="text-sm md:text-base text-gray-500">Values</p>
          </div>
        </div>
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

export default Second;
