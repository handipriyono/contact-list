import { useState } from "react";
import { addContact } from "../api";
import { useNavigate } from "react-router-dom";

const useQueryAPI = () => {
  const navigate = useNavigate();
  const [item, setItem] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [photo, setPhoto] = useState("");
  const [age, setAge] = useState("");

  const addContactAPIItem = async () => {
    try {
      const data = await addContact({
        payload: {
          firstName,
          lastName,
          photo: photo?.[0]?.name ?? photo,
          age: Number(age),
        },
      });
      if ([201, 200]?.includes(data?.status)) {
        return navigate("/");
      }
      throw new Error("Error");
    } catch (error) {
      alert("Error occured");
      console.log("err");
    }
  };

  const onChange = (e, key) => {
    switch (key) {
      case "firstName":
        return setFirstName(e?.target?.value);
      case "lastName":
        return setLastName(e?.target?.value);
      case "age":
        return setAge(e?.target?.value);

      case "photo":
        return setPhoto(e?.target?.files);
      default:
        break;
    }
  };

  return {
    open,
    item,
    setItem,
    firstName,
    lastName,
    age,
    onChange,
    addContactAPIItem,
  };
};

export default useQueryAPI;
