import axios from "axios";
const getToken = localStorage.getItem("jwtToken");

const instance = axios.create({
  baseURL: "http:/222.111.114.132:4000/users/login",
});
if (getToken) {
  instance.defaults.headers.common["token"] = `Bearer ${getToken}`;
}

export default instance;
