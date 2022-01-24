import axios from "axios";
axios.defaults.withCredentials = true;
export default axios.create({
  // baseURL: "http://localhost:4040/api",
  baseURL: "https://mebook-server.herokuapp.com/api",
  withCredentials: true,
});
