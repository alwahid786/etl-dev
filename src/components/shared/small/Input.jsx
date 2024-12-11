/* eslint-disable react/prop-types */

const Input = ({
  readOnly,
  icon,
  label,
  onClick,
  labelColor = true,
  ...rest
}) => {
  return (
    <div className="relative w-full">
      {label && (
        <label
          className={`text-xs md:text-sm  mb-2 font-[500] block ${
            labelColor ? "text-black" : "text-white"
          }`}
        >
          {label}
        </label>
      )}
      <div className="relative w-full">
        <input
          className="w-full h-[45px] px-4 border border-secondaryGray rounded-lg text-sm text-black focus:outline-none"
          readOnly={readOnly}
          {...rest}
        />

        {icon && (
          <div
            className="absolute inset-y-0 right-4 flex items-center text-[#414141] cursor-pointer"
            onClick={onClick}
          >
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
