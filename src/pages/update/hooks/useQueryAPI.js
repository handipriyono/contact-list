import { useEffect, useState } from "react";
import { getDetailContact, updateDetailAPI } from "../api";
import { useParams, useNavigate } from "react-router-dom";

const useQueryAPI = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  const [item, setItem] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [photo, setPhoto] = useState("");
  const [age, setAge] = useState("");

  const updateDetailAPIItem = async () => {
    try {
      const data = await updateDetailAPI({
        id: id,
        payload: {
          firstName,
          lastName,
          photo,
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

  const getDetailContactItem = async () => {
    try {
      const data = await getDetailContact({
        id: id,
      });
      const item = data?.data;
      if (item) {
        setItem(item);
        setFirstName(item?.firstName);
        setLastName(item?.lastName);
        setAge(item?.age);
        setPhoto(item?.photo);
      }
    } catch (error) {
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
        return setPhoto(URL.createObjectURL(e.target.files[0]));
      default:
        break;
    }
  };

  useEffect(() => {
    getDetailContactItem();
  }, []);

  return {
    open,
    item,
    setItem,
    firstName,
    lastName,
    age,
    onChange,
    updateDetailAPIItem,
  };
};

export default useQueryAPI;
