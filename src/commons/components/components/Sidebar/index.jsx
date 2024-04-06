import { Link } from "react-router-dom";
import {
  PlusCircleIcon,
  IdentificationIcon,
  ArrowRightIcon,
} from "@heroicons/react/20/solid";
import "./style.scss";

const Sidebar = () => {
  return (
    <>
      <div className="transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-80 bg-white border-e border-gray-200 py-10 px-8 overflow-y-auto lg:block lg:translate-x-0 lg:top-0 lg:end-auto lg:bottom-0 lg:start-[max(0px,calc(50%-45rem))] lg:z-10 d[&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-slate-900">
        <IdentificationIcon
          color="#808080"
          className="-mr-0.5 h-16 w-16 justify-center items-center align-middle mb-2"
          aria-hidden="true"
        />
        <nav
          id="sidebar-nav"
          className="relative space-y-8 border-t border-gray-400 pb-5 mb-5"
        >
          <Link to="/add">
            <button
              type="button"
              className="mt-2 inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Create Contact
              <PlusCircleIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
            </button>
          </Link>
          <ul
            className="ms-0.5 space-y-2 border-s-2 border-slate-100 dark:border-slate-800"
            data-hs-scrollspy="#scrollspy"
          >
            <li className="flex flex-row items-center gap-2">
              <a
                className="block py-1 ps-4 -ms-px border-s-2 border-transparent text-sm text-slate-700 hover:border-slate-400 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300 hs-scrollspy-active:font-medium hs-scrollspy-active:text-blue-600 dark:hs-scrollspy-active:text-blue-400 active"
                href="#first"
              >
                <Link to="/"> Contacts List</Link>
              </a>
              <ArrowRightIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
            </li>
          </ul>
        </nav>
        {/* Nav */}
      </div>
    </>
  );
};

export default Sidebar;
