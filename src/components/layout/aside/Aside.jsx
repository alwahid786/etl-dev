import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { pages } from "./pages";
import { IoMdArrowRoundForward } from "react-icons/io";

const Aside = () => {
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  const { pathname } = useLocation();

  const asideToggleHandler = () => {
    setIsAsideOpen(!isAsideOpen);
  };
  return (
    <div
      className={`h-full py-8 relative transition-all duration-500 rounded-lg xl:rounded-[0] bg-primaryLight ${
        isAsideOpen ? "w-[90px]" : "w-[220px]"
      }`}
      //   style={{
      //     background:
      //       "linear-gradient(176.49deg, #D3FFF7 0.63%, #89DBCB 48.82%, rgba(22, 172, 143, 0.9) 71.79%, rgba(24, 162, 135, 0.9) 96.7%)",
      //   }}
    >
      <div className="flex items-center gap-1 justify-center overflow-hidden px-4">
        {/* <img src={logo} alt="logo" className="w-[40px]" /> */}
        <h6
          className={`text-base md:text-xl font-bold text-primary leading-none transition-all duration-500 text-nowrap ${
            isAsideOpen ? "w-0 opacity-0 invisible" : "w-full"
          }`}
        >
          ETL
        </h6>
      </div>
      <div
        className={`hidden xl:block absolute top-10 cursor-pointer transition-all duration-300 bg-primaryDark border-[1px] text-primaryLight p-2 rounded-full  ${
          isAsideOpen ? "rotate-180 right-[-13%]" : "rotate-0 right-[-7%]"
        }`}
        onClick={asideToggleHandler}
      >
        <IoMdArrowRoundForward />
      </div>
      <div className="my-4 md:my-6 bg-primaryDark h-[1px] w-full px-4"></div>
      <div
        className={`flex flex-col justify-center gap-2 overflow-hidden ${
          isAsideOpen ? "items-center" : "items-start"
        }`}
      >
        {pages.map((page, i) => (
          <Link
            key={i}
            to={page.link}
            className={`relative flex items-center w-full min-w-fit p-2 cursor-pointer transition-all duration-300 ${
              isAsideOpen ? "gap-[0] justify-center" : "gap-2"
            }`}
          >
            <div
              className={`text-primaryDark text-[20px] ${
                isAsideOpen ? "pl-0" : "pl-4"
              }`}
            >
              {page?.icon}
            </div>
            <p
              className={`text-sm md:text-base text-nowrap capitalize transition-opacity duration-300 text-primaryDark ${
                pathname === page.link
                  ? "text-[#000000A6] font-bold"
                  : "text-[#071A17A8]"
              } ${isAsideOpen ? "opacity-0 w-0" : "opacity-100 w-auto"}`}
            >
              {page.title}
            </p>
            {pathname === page.link && (
              <div className="absolute top-0 right-[0] w-[8px] h-[38px] rounded-tl-lg rounded-bl-lg bg-primaryDark"></div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Aside;
