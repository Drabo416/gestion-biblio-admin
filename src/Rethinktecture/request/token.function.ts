import axios from "axios";

const addBearerToken = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return axios
};


const removeBearerToken = () => {
  delete axios.defaults.headers.common["Authorization"];
  return axios
};


export { addBearerToken, removeBearerToken }