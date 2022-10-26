import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { REST_API_KEY, REDIRECT_URI } from "../kakaologindata/KaKaoLoginData";
import styled from "styled-components";
import { useCookies } from "react-cookie";
import { instance } from "../utils/Instance";

function ProfileSignup() {
  const navigate = useNavigate();
  const kakaoLogin = async () => {
    const code = new URL(window.location.href).searchParams.get("code");
    const res = await axios.get(`/callback?code=${code}`).then((res) => {
      console.log(res);
      const token = res.data.token;
      const userData = {
        email: res.data.email,
        image: res.data.image,
        nickname: res.data.nickname,
        userId: res.data.userId,
        provider: res.data.provider,
      };
      if (token) {
        window.localStorage.setItem("token", token);
        window.localStorage.setItem("userData", JSON.stringify(userData));
        navigate(`/${res.data.nickname}`, {
          state: {
            userId: "",
          },
        });
      } else {
        navigate("/login", {
          state: {
            email: res.data.email,
            provider: res.data.provider,
          },
        });
      }
    });
    return res;
  };
  const userData = JSON.parse(window.localStorage.getItem("userData")) || null;
  useEffect(() => {
    if (userData) {
      navigate(`/${userData.nickname}`);
    } else {
      kakaoLogin();
    }
  }, []);

  return <></>;
}

export default ProfileSignup;

//ppT_1y9TE-RKn61scoXx9isP2IXRCWVwEM-67aHBOLJcUFdFWy5gjpXUPfTD7TELdktMLAo9c-sAAAGEDQJV4w
