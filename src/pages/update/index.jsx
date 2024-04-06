import Layout from "../../commons/components/layout";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import getDetailContactItem from "./hooks/useQueryAPI";
import { Link } from "react-router-dom";

const Field = ({ title, value, onChange }) => {
  return (
    <div className="relative mb-5">
      <label
        htmlFor="name"
        className="absolute -top-2 left-2 inline-block bg-white px-1 text-xs font-medium text-gray-900"
      >
        {title}
      </label>
      <input
        type="text"
        name="name"
        id="name"
        onChange={onChange}
        value={value}
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Jane Smith"
      />
    </div>
  );
};

const Details = () => {
  const {
    item,
    firstName,
    lastName,
    age,
    onChange,
    updateDetailAPIItem,
    photo,
  } = getDetailContactItem();
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
          <h1 className="text-black text-2xl">Update Contact</h1>
          <p className="mt-2 text-sm text-gray-700">
            Info details about your account
          </p>
        </div>
        <div className=" transition-transform duration-300 flex p-5 flex-col rounded-xl max-w-[600px] min-h-[150px] sm:min-h-[200px]">
          <input
            onChange={(e) => onChange(e, "photo")}
            className="block w-full mb-5 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="default_size"
            type="file"
          />
          <Field
            title="First Name"
            value={firstName}
            onChange={(e) => onChange(e, "firstName")}
          />
          <Field
            title="Last Name"
            value={lastName}
            onChange={(e) => onChange(e, "lastName")}
          />
          <Field title="Age" value={age} onChange={(e) => onChange(e, "age")} />
          <button
            type="button"
            onClick={updateDetailAPIItem}
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Update
          </button>
        </div>
      </Layout>
    </>
  );
};

export default Details;
