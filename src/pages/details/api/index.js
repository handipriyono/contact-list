import { API_GATEWAY } from "../../../commons/constants";

export const getDetailContact = ({ id }) => {
  return fetch(`${API_GATEWAY}/contact/${id}`)
    .then((data) => data.json())
    .catch((err) => console.log(err));
};

export default { getDetailContact };
