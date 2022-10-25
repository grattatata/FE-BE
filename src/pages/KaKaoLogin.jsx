import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { REST_API_KEY, REDIRECT_URI } from "../kakaologindata/KaKaoLoginData";
import styled from "styled-components";
import { useCookies } from "react-cookie";

function KaKaoLogin() {
  const location = useLocation();
  const navigate = useNavigate();
  const KAKAO_CODE = location.search.split("=")[1]; // 인가코드 전달하기 백으로
  const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]);
  const getKaKaoToken = () => {
    // 백에서
    fetch("https://kauth.kakao.com/oauth/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `grant_type=authorization_code&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${KAKAO_CODE}`,
    })
      .then((res) => res.json())
      .then((data) => {
        // 백엔드에 토큰전달

        console.log(data);
        if (data.access_token) {
          setCookie("refreshToken", data.refresh_token);
          setCookie("accessToken", data.access_token);
          navigate("/");
        }
      });
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
  };
  useEffect(() => {
    if (!location.search) return;
    getKaKaoToken();
  }, []);
  return <div>KAKAO LOGIN</div>;
}

export default KaKaoLogin;

//ppT_1y9TE-RKn61scoXx9isP2IXRCWVwEM-67aHBOLJcUFdFWy5gjpXUPfTD7TELdktMLAo9c-sAAAGEDQJV4w
