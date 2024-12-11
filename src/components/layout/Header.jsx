import { useState } from "react";
import Aside from "./aside/Aside";
import Button from "../shared/small/Button";
import { AiOutlineMenu } from "react-icons/ai";
import { MdLogout } from "react-icons/md";

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const mobileNavHandler = () => setMobileNav(!mobileNav);
  return (
    <div className="border-b-[1px] p-5 bg-primaryLight">
      <div className="flex justify-between">
        <div
          className="bg-primary p-2 rounded-md cursor-pointer block xl:hidden text-primaryDark items-center"
          onClick={mobileNavHandler}
        >
          <AiOutlineMenu />
        </div>
        <div className="flex justify-end w-full">
          <Button
            text="Logout"
            variant="outlined"
            width="w-[100px]"
            icon={<MdLogout />}
          />
        </div>
        <div
          className={`block xl:hidden fixed w-full h-full inset-0  z-50 transition-all duration-500 ${
            mobileNav
              ? "visible opacity-100"
              : "invisible opacity-0 pointer-events-none"
          }`}
          onClick={() => setMobileNav(false)}
        >
          <div
            className={`absolute top-3 left-3 h-full transition-transform duration-500 border-[1px] rounded-lg shadow-lg ${
              mobileNav ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <Aside />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
