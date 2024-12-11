/* eslint-disable react/prop-types */
const Button = ({
  variant = "contained",
  text,
  bg,
  height,
  width,
  icon,
  ...rest
}) => {
  if (variant === "contained") {
    return (
      <button
        className={`flex items-center justify-center gap-2 transition-all duration-300 text-sm md:text-base font-[400]
       
        ${width || "w-full sm:w-auto"} 
        ${
          bg ||
          "text-white bg-primaryDark hover:bg-transparent hover:text-primaryDark"
        } 
        ${height || "h-[41px]"} 
        border-[1px] border-primaryDark rounded-md`}
        {...rest}
      >
        {icon && icon}
        {text}
      </button>
    );
  } else if (variant === "outlined") {
    return (
      <button
        className={`flex items-center justify-center gap-2 transition-all duration-300 text-sm md:text-base font-[400]
        
        ${width || "w-full sm:w-auto"} 
        ${
          bg ||
          "bg-transparent text-primaryDark hover:bg-primaryDark hover:text-white"
        } 
        ${height || "h-[41px]"} 
        border-[1px] border-primaryDark rounded-md`}
        {...rest}
      >
        {icon && icon}
        {text}
      </button>
    );
  }
  return null;
};

export default Button;
