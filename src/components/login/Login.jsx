import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import kakaoLogin from "../../assets/img/kakao_login_large_wide.png";

function Login() {
  return (
    <LoginForm>
      <InputWrap>
        <Title>My Blog</Title>
        <IdInput placeholder="아이디를 입력하세요" type="text" />
        <PassWordInput placeholder="비밀번호를 입력하세요" type="password" />
        <ButtonWrap>
          <Button>로그인</Button>
          <Link to={"/register"}>
            <Button style={{ marginLeft: "20px" }}>회원가입</Button>
          </Link>
        </ButtonWrap>
      </InputWrap>
      <SocialKakao>
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
    background-color: #00ffbf;
    color: #ffffff;
    border: none;
    cursor: pointer;
  }
`;
