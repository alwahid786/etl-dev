import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="bg-[#FCA04B0D] rounded-2xl p-5 h-[90vh]  ">
      <Outlet />
    </div>
  );
};

export default Main;
