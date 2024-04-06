import { API_GATEWAY } from "../../../commons/constants";

export const getListContact = () => {
  return fetch(`${API_GATEWAY}/contact`)
    .then((data) => data.json())
    .catch((err) => console.log(err));
};

export const deleteContactItem = ({ id }) => {
  return fetch(`${API_GATEWAY}/contact/${id}`, {
    method: "DELETE",
  })
    .then((data) => data)
    .catch((err) => console.log(err));
};

export default { getListContact, deleteContactItem };
