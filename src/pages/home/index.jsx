import Layout from "../../commons/components/layout";
import MenuAction from "../../commons/components/components/MenuAction";
import ModalDelete from "./components/ModalDelete";
import useQueryAPI from "./hooks/useQueryAPI";
import "./style.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const { open, setOpen, dataContact, deleteContact, setSelected, selected } =
    useQueryAPI();
  const [cloneOpen, setCloneOpen] = useState(open);
  const navigate = useNavigate();

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setCloneOpen(true);
      });
    } else {
      setTimeout(() => {
        setCloneOpen(false);
      }, 400);
    }
  }, [open]);
  return (
    <>
      <Layout>
        <table className="w-full text-left">
          <thead
            className={`bg-white sticky top-0 ${cloneOpen ? "z-5" : "z-10"}`}
          >
            <tr>
              <th
                scope="col"
                className="hidden sm:table-cell relative isolate py-3.5 pr-3 text-left text-sm font-semibold text-gray-900"
              >
                <div className="absolute inset-y-0 right-full -z-10 w-screen border-b border-b-gray-200" />
                <div className="absolute inset-y-0 left-0 -z-10 w-screen border-b border-b-gray-200" />
              </th>
              <th
                scope="col"
                className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
              >
                First Name
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
              >
                Last Name
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
              >
                Age
              </th>
              <th scope="col" className="relative py-3.5 pl-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {dataContact.map((person, idx) => (
              <tr key={person.email}>
                <td className="hidden relative text-sm font-medium text-gray-400 w-[100px] sm:table-cell">
                  <div className="py-3">
                    <img
                      style={{
                        width: "90px",
                        height: "70px",
                      }}
                      src={person?.photo ?? "https://placehold.jp/150x150.png"}
                      className="rounded-xl"
                      alt={"img of " + person?.firstName}
                    />
                  </div>
                  <div className="absolute bottom-0 right-full h-px w-screen bg-gray-100" />
                  <div className="absolute bottom-0 left-0 h-px w-screen bg-gray-100" />
                </td>
                <td className="px-3 py-4 text-base  sm:table-cell text-black">
                  {person.firstName}
                </td>
                <td className="hidden px-3 py-4 text-base sm:table-cell text-black">
                  {person.lastName}
                </td>
                <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
                  {person.age}
                </td>
                <td className="relative py-4 pl-3 text-right text-sm font-medium">
                  <MenuAction
                    onView={() => {
                      navigate(`/details/${person.id}`);
                    }}
                    onDelete={() => {
                      setSelected(person);
                      setOpen(true);
                    }}
                    onEdit={() => {
                      navigate(`/update/${person.id}`);
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ModalDelete onDelete={deleteContact} open={open} setOpen={setOpen} />
      </Layout>
    </>
  );
}

export default Home;
const people = [
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  {
    name: "Lindsay Walton",
    title: "Front-end Developer",
    email: "lindsay.walton@example.com",
    role: "Member",
  },
  // More people...
];
