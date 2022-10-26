import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProfileSignup from "../pages/ProfileSignup";
import axios from "axios";
import { useEffect, useState } from "react";

function Router() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   axios
  //     .post(
  //       "http://localhost:3000/auth/silent-refresh",
  //       {},
  //       {
  //         withCredentials: true,
  //       }
  //     )
  //     .then((res) => {
  //       console.log(res);
  //       const { accessToken } = res.data;
  //       console.log(accessToken);
  //       axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
  //       setIsLoggedIn(true);
  //     });
  // }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/auth/kakao/callback" element={<ProfileSignup />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
