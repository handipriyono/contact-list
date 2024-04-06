import { API_GATEWAY } from "../../../commons/constants";

export const getDetailContact = ({ id }) => {
  return fetch(`${API_GATEWAY}/contact/${id}`)
    .then((data) => data.json())
    .catch((err) => console.log(err));
};

export const updateDetailAPI = ({ id, payload }) => {
  return fetch(`${API_GATEWAY}/contact/${id}`, {
    method: "PUT",
    body: JSON.stringify(payload),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((data) => data)
    .catch((err) => console.log(err));
};

export default { getDetailContact };
