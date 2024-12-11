import Aside from "../../components/layout/aside/Aside";
import Header from "../../components/layout/Header";
import Main from "../../components/layout/Main";

const DashboardLayout = () => {
  return (
    <section className="w-full relative user-dashboard h-screen overflow-hidden bg-[#f5f7fb] z-[0]">
      <div className="flex flex-col-2 h-full">
        <div className="hidden xl:block">
          <Aside />
        </div>
        <div className=" w-[100%] pb-1 scroll-to-top overflow-y-scroll custom-scroll">
          <Header />
          <Main />
        </div>
      </div>
    </section>
  );
};

export default DashboardLayout;