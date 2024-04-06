import { useEffect, useState } from "react";
import { deleteContactItem } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { fetchPersons } from "../../../stores/personSlice";

const useQueryAPI = () => {
  const dispatch = useDispatch();
  const persons = useSelector((state) => state.persons.entities);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState({});

  const deleteContact = async () => {
    try {
      const data = await deleteContactItem({ id: selected?.id });
      if (data?.status >= 400) {
        throw new Error("Error");
      }
      dispatch(fetchPersons());
    } catch (error) {
      alert("Error occured", JSON.stringify(error));
    }
  };

  useEffect(() => {
    dispatch(fetchPersons());
  }, [dispatch]);

  return {
    open,
    setOpen,
    dataContact: persons?.data || [],
    deleteContact,
    selected,
    setSelected,
  };
};

export default useQueryAPI;
