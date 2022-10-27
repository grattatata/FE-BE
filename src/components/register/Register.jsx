import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const onSubmit = (data) => {
    axios.post(process.env.REACT_APP_USER_REGIST, data).then((response) => {
      if (response.status === 201) {
        window.alert(response.data.msg);
        navigate("/login");
      } else if (response.status === 409) {
        alert("중복된 아이디 입니다.");
      }
    });
  };

  return (
    <RegisterForm onSubmit={handleSubmit(onSubmit)}>
      <InputWrap>
        <Title>회원가입</Title>
        <IdInput
          placeholder="아이디를 입력하세요"
          {...register("userId", {
            required: "아이디를 입력해주세요.",
            maxLength: {
              value: 10,
              message: "10자 이내로 입력해주세요",
            },
            minLength: {
              value: 4,
              message: "4자 이상 입력해주세요.",
            },
          })}
        />
        <p style={{ color: "red", marginLeft: "23px", fontSize: "12px", marginBottom: "-5px" }}>{errors.userId?.message}</p>
        <NameInput
          placeholder="닉네임을 입력하세요"
          {...register("nickname", {
            required: "닉네임을 입력해주세요.",
            maxLength: {
              value: 8,
              message: "8자 이내로 입력해주세요.",
            },
            minLength: {
              value: 4,
              message: "4자 이상 입력해주세요.",
            },
          })}
        />
        <p style={{ color: "red", marginLeft: "23px", fontSize: "12px", marginBottom: "-5px" }}>{errors.nickname?.message}</p>
        <PassWordInput
          placeholder="비밀번호를 입력하세요"
          type="password"
          {...register("password", {
            required: "비밀번호는 필수 입력입니다.",
            minLength: {
              value: 6,
              message: "비밀번호는 6자 이상 입력해주세요",
            },
          })}
        />
        <p style={{ color: "red", marginLeft: "23px", fontSize: "12px", marginBottom: "-5px" }}>{errors.password?.message}</p>
        <PwCheckInput
          placeholder="비밀번호 확인"
          type="password"
          {...register("confirm", {
            required: "반드시 입력해주세요.",
            validate: {
              check: (confirm) => confirm === password || "비밀번호가 일치하지 않습니다.",
            },
          })}
        />
        <p style={{ color: "red", marginLeft: "23px", fontSize: "12px", marginBottom: "-5px" }}>{errors.confirm?.message}</p>
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

const PwCheckInput = styled.input`
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
