import Layout from "../../commons/components/layout";
import {
  UserCircleIcon,
  CalculatorIcon,
  ArrowLeftIcon,
} from "@heroicons/react/20/solid";
import getDetailContactItem from "./hooks/useQueryAPI";
import { Link } from "react-router-dom";

const Details = () => {
  const { item } = getDetailContactItem();
  return (
    <>
      <Layout>
        <Link to={"/"}>
          <ArrowLeftIcon
            className="h-10 w-9  text-grey-400 pr-2 sm:block cursor-pointer hover:text-stone-950"
            aria-hidden="true"
          />
        </Link>
        <div className="flex flex-row pb-2 border-solid border-b border-[#e1e3e2] p-2 sm:p-5 align-middle items-center content-center gap-2 sm:gap-5">
          <img
            className="hover:scale-110 transition duration-500 rounded-full w-[100px] h-[100px] sm:w-[150px]"
            src={item?.photo}
          />
          <h1 className="text-black text-xl sm:text-2xl">
            {item?.firstName} {item?.lastName}
          </h1>
        </div>

        <div className="flex flex-col justify-center mb-5 mt-5">
          <h1 className="text-black text-2xl">Contact Detail</h1>
          <p className="mt-2 text-sm text-gray-700">
            Info details about your account
          </p>
        </div>
        <div className="shadow hover:shadow-lg transform hover:scale-105 transition-transform duration-300 flex p-5 flex-col rounded-xl max-w-[600px] bg-[#f0f4f9] min-h-[150px] sm:min-h-[200px]">
          <div className="flex flex-row">
            <UserCircleIcon
              className="h-6 w-6 text-grey-600 pr-2 hidden sm:block"
              aria-hidden="true"
            />
            <div>
              <h4 className="pr-5 font-semibold text-neutral-950 min-w-[100px]">
                First Name:
              </h4>
            </div>
            <div>
              <p className="text-gray-600 ">{item?.firstName}</p>
            </div>
          </div>
          <div className="flex flex-row">
            <UserCircleIcon
              className="h-6 w-6 text-grey-600 pr-2 hidden sm:block"
              aria-hidden="true"
            />
            <div>
              <p className="text-black font-semibold pr-5 min-w-[100px]">
                Last Name:
              </p>
            </div>
            <div>
              <p className="text-gray-600 ">{item?.lastName}</p>
            </div>
          </div>
          <div className="flex flex-row">
            <CalculatorIcon
              className="h-6 w-6 text-grey-600 pr-2 hidden sm:block"
              aria-hidden="true"
            />
            <div>
              <p className="text-black  font-semibold pr-5 min-w-[100px]">
                Age:
              </p>
            </div>
            <div>
              <p className="text-gray-600 ">{item?.age}</p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Details;
