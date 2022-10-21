import React from "react";
import styled from "styled-components";
function Register() {
  return (
    <RegisterForm>
      <InputWrap>
        <Title>회원가입</Title>
        <IdInput placeholder="아이디를 입력하세요" type="text" />
        <NameInput placeholder="닉네임을 입력하세요" type="text" />
        <PassWordInput placeholder="비밀번호를 입력하세요" type="password" />
        <Button>가입하기</Button>
      </InputWrap>
    </RegisterForm>
  );
}
export default Register;

const RegisterForm = styled.form`
  width: 400px;
  height: 500px;
  margin: 90px auto;
  border-radius: 20px;
`;

const Title = styled.p`
  margin-left: 138px;
  font-size: 2rem;
`;

const InputWrap = styled.div`
  width: 100%;
`;

const NameInput = styled.input`
  width: 350px;
  height: 40px;
  padding: 5px;
  margin-top: 20px;
  margin-left: 18px;

  border: none;
  border-radius: 10px;
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

const Button = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 10px;
  border: none;
  margin-top: 90px;
  margin-left: 150px;
  :hover {
    background-color: #00ffbf;
    color: #ffffff;
    border: none;
    cursor: pointer;
  }
`;
