import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "./style.scss";

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <>
      <>
        <div className=" mx-auto">
          <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-slate-900 dark:border-gray-700"></div>
          <div className=" px-4 sm:px-6 md:px-8 lg:ps-[22rem] ">
            <Header />
            <div className="mx-auto py-2">
              <Sidebar />
              <div className="h-[100vh] sm:h-[calc(100vh-120px)] overflow-y-auto overflow-x-hidden">
                <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
}

export default Layout;
