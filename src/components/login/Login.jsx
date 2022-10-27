import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import kakaoLogin from "../../assets/img/kakao_login_large_wide.png";
import { useForm } from "react-hook-form";
import axios from "axios";
import { decodeToken } from "react-jwt";
import { useCookies } from "react-cookie";

axios.defaults.withCredentials = true;

function Login() {
  const KAKAO_AUTH_URL = process.env.REACT_APP_KAKAO_AUTH_URL;
  const [cookies, setCookie] = useCookies(["accessToken", "refreshToken"]);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    try {
      axios.post(process.env.REACT_APP_USER_LOGIN, data).then((response) => {
        if (response.status === 200) {
          navigate("/");
          const accessToken = response.data.accessToken;
          const refreshToken = response.data.refreshToken;
          localStorage.setItem("token", accessToken);
          setCookie("accessToken", accessToken);
          setCookie("refreshToken", refreshToken);
          const payload = decodeToken(accessToken);
          alert(`${payload.nickname} 님 환영합니다!`);
        } else if (response.status === 409) {
          alert(response.data.msg);
        }
      });
    } catch (err) {
      console.log(err);
      alert("로그인 실패");
    }
  };

  const handleKaKaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <LoginForm onSubmit={handleSubmit(onSubmit)}>
      <InputWrap>
        <Title>My Blog</Title>
        <IdInput
          placeholder="아이디를 입력하세요"
          {...register("userId", {
            required: "아이디를 입력해주세요.",
          })}
        />
        <p style={{ color: "red", marginLeft: "23px", fontSize: "12px", marginBottom: "-5px" }}>{errors.userId?.message}</p>
        <PassWordInput
          placeholder="비밀번호를 입력하세요"
          type="password"
          {...register("password", {
            required: "비밀번호를 입력해주세요.",
          })}
        />
        <p style={{ color: "red", marginLeft: "23px", fontSize: "12px", marginBottom: "-5px" }}>{errors.password?.message}</p>
        <ButtonWrap>
          <Button>로그인</Button>
          <Link to={"/register"}>
            <Button style={{ marginLeft: "20px" }}>회원가입</Button>
          </Link>
        </ButtonWrap>
      </InputWrap>
      <SocialKakao onClick={handleKaKaoLogin}>
        <img src={kakaoLogin} alt="kakaoLogin" width="90%" height="55px" style={{ marginLeft: "20px" }} />
      </SocialKakao>
    </LoginForm>
  );
}
export default Login;

const LoginForm = styled.form`
  width: 400px;
  height: 500px;
  margin: 90px auto;
  border-radius: 20px;
`;

const Title = styled.p`
  margin-left: 142px;
  font-size: 2rem;
`;

const InputWrap = styled.div`
  width: 100%;
`;

const IdInput = styled.input`
  width: 350px;
  height: 40px;
  padding: 5px;
  margin-top: 20px;
  margin-left: 18px;

  border: none;
  border-radius: 10px;
`;

const PassWordInput = styled.input`
  width: 350px;
  height: 40px;
  padding: 5px;
  margin-top: 20px;
  margin-left: 18px;

  border: none;
  border-radius: 10px;
`;

const SocialKakao = styled.div`
  margin-top: 40px;
  :hover {
    cursor: pointer;
    opacity: 0.6;
  }
`;

const ButtonWrap = styled.div`
  margin-top: 90px;
  margin-left: 90px;
`;

const Button = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 10px;
  border: none;
  :hover {
    background-color: #14ebb5c5;
    color: #ffffff;
    border: none;
    cursor: pointer;
  }
`;
