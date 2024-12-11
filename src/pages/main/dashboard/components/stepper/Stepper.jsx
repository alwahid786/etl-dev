import { useState } from "react";

import Third from "./Third";
import First from "./First";
import Second from "./Second";
import Last from "./Last";
import { FaBitbucket } from "react-icons/fa";
import { GrValidate } from "react-icons/gr";
import { SiConvertio } from "react-icons/si";
import { IoReloadOutline } from "react-icons/io5";

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <First setCurrentStep={setCurrentStep} />;
      case 1:
        return <Second setCurrentStep={setCurrentStep} />;
      case 2:
        return <Third setCurrentStep={setCurrentStep} />;
      case 3:
        return <Last setCurrentStep={setCurrentStep} />;

      default:
        return null;
    }
  };

  const steps = [
    {
      label: "Buckets",
      icon: <FaBitbucket />,
    },
    {
      label: "Validate",
      icon: <GrValidate />,
    },
    {
      label: "Convert",
      icon: <SiConvertio />,
    },
    {
      label: "Load",
      icon: <IoReloadOutline />,
    },
  ];
  return (
    <div className="bg-white container mx-auto  rounded-[18px] p-4 md:p-[85px] h-full ">
      <div className="flex flex-wrap items-center justify-between gap-4 ">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex items-center cursor-default ${
              currentStep >= index ? "opacity-100" : "opacity-50"
            } ${index < steps.length - 1 ? "flex-1" : ""}`}
          >
            <div className="flex flex-col gap-1 items-center">
              <div className="flex flex-col  gap-1 bg-primary-lightBlue rounded-full p-[10px] items-end bg-primaryDark text-white">
                {step.icon}
              </div>
              <p className="text-xs md:text-sm font-bold text-primaryDark">
                {step.label}
              </p>
            </div>
            {index < steps.length - 1 && <Arrow />}
          </div>
        ))}
      </div>
      <div className="mt-6 md:mt-8">{renderStepContent(currentStep)}</div>
    </div>
  );
};

export default Stepper;

const Arrow = () => {
  return (
    <div className="ml-[-5px] flex items-start flex-1">
      <svg
        width="17"
        height="24"
        viewBox="0 0 17 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      ></svg>
      <div className="border border-t-[5px] rounded-full border-primaryDark flex-1  "></div>
      <div className="ml-[-6px] mt-[-0.5px]"></div>
    </div>
  );
};
