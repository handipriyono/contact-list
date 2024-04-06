import { useEffect, useState } from "react";
import { getDetailContact } from "../api";
import { useParams } from "react-router-dom";

const useQueryAPI = () => {
  let { id } = useParams();
  const [item, setItem] = useState({});

  const getDetailContactItem = async () => {
    try {
      const data = await getDetailContact({
        id: id,
      });
      if (data?.data) {
        setItem(data?.data);
      }
    } catch (error) {
      console.log("err");
    }
  };

  useEffect(() => {
    if (id) {
      getDetailContactItem();
    }
  }, [id]);

  return {
    open,
    item,
    setItem,
  };
};

export default useQueryAPI;
