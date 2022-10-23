import React from "react";
import styled from "styled-components";
import {useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import { postUser } from "../../redux/modules/signup";
import {useForm} from "react-hook-form"
function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {register, handleSubmit, formState:{errors}} = useForm();
  console.log(errors)

  const onSubmit = (data) => {
    console.log(data)
      dispatch(postUser(data)).then(response => { 
        if(response.payload.loginSuccess){ 
          window.alert("회원가입 성공!")
          navigate("/login")
        }
        else{
          window.alert("회원가입 실패!")
        }
      }) 
    }

  return (
    <RegisterForm onSubmit={handleSubmit(onSubmit)}>
      <InputWrap>
        <Title>회원가입</Title>
        <IdInput 
          placeholder="아이디를 입력하세요" 
          name="ID"
          {...register('ID', {required:true})}
         />
        <NameInput 
          placeholder="닉네임을 입력하세요"
          name="nickname"
          {...register('nickname', {required:true} )}
          />
        <PassWordInput 
          placeholder="비밀번호를 입력하세요" 
          type="password"
          name="password"
          {...register('password', {required:true})}
         />
        <PwCheckInput 
          placeholder="비밀번호 확인" 
          type="password"
          name="confirm"
          {...register('confirm', {required:true})}
         />
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
`

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
