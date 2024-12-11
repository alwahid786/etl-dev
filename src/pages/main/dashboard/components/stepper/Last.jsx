/* eslint-disable react/prop-types */
import Button from "../../../../../components/shared/small/Button";

const Last = ({ setCurrentStep }) => {
  const handleLoadData = () => {
    alert("Load Button Handler");
  };

  const handleSubmitData = () => {
    alert("Submitted");
    setCurrentStep((prevStep) => prevStep + 1);
  };

  return (
    <div className="space-y-3">
      <div className="md:border-[1px] md:p-3 rounded-lg space-y-3 h-[40vh]">
        <Button
          text="Load"
          width="w-full md:w-[128px]"
          bg="bg-secondaryGray text-white border-secondaryGray hover:text-secondaryGray hover:bg-transparent"
          onClick={handleLoadData}
        />

        {/* below are the message conditionally display on the basis of success or failed of bucket conversion */}
        <p className="text-xs md:text-sm font-bold text-[#376123] bg-[#487a2d40] p-5 rounded-lg w-fit ">
          Bucket Converted Successfully!
        </p>
        <p className="text-xs md:text-sm font-bold text-[#ff4e4e] bg-[#ff222240] p-5 rounded-lg w-fit ">
          Bucket Conversion Failed!
        </p>
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
          text="Submit"
          width="w-full md:w-[128px]"
          onClick={handleSubmitData}
        />
      </div>
    </div>
  );
};

export default Last;
