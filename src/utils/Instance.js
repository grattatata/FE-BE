import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true,
});

instance.interceptors.request.use(function (config) {
  console.log(config);
  const accessToken = localStorage.getItem("token");
  if (accessToken) {
    config.headers.common["Authorization"] = ` ${accessToken}`;
  }
  return config;
});
