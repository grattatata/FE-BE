import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { __addPosts } from "../../redux/modules/posts";
import styled from "styled-components";

function MainInput() {
  const dispatch = useDispatch();

  const [posts, setPosts] = useState({
    title: "",
    content: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setPosts({ ...posts, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (posts.title.trim() === "" || posts.content.trim() === "") return alert("내용을 입력해주세요!");
    dispatch(__addPosts({ ...posts }));
    alert("등록 완료");
    setPosts({
      title: "",
      content: "",
    });
  };

  return (
    <InputForm onSubmit={onSubmitHandler}>
      <MainInputContainer>
        <MainInputBox>
          <TitleInputText placeholder="제목" type="text" name="title" value={posts.title} onChange={onChangeHandler} />
          <MainInputText placeholder="지금 무슨 생각을 하고 계신가요?" type="text" name="content" value={posts.content} onChange={onChangeHandler} />
          <MainButton>추가하기</MainButton>
        </MainInputBox>
      </MainInputContainer>
    </InputForm>
  );
}

export default MainInput;

const MainInputContainer = styled.div``;

const MainInputBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid #71d2c0b5;
  padding: 30px;
`;

const InputForm = styled.form``;

const TitleInputText = styled.input`
  height: 30px;
  margin-right: 30px;
  border: 1px solid #6ed6c3b9;
  text-align: center;
  border-radius: 10px;

  &:focus {
    outline: 1px auto #acb6e5;
    outline-offset: 2px;
    border-color: transparent;
  }
`;
const MainInputText = styled.input`
  border-radius: 10px;

  min-width: 200px;
  width: 400px;
  height: 30px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #6ed6c3b9;
  text-align: center;
  &:focus {
    outline: 1px auto #acb6e5;
    outline-offset: 2px;
    border-color: transparent;
  }
`;

const MainButton = styled.button`
  border: none;
  height: 36px;
  width: 120px;
  min-width: 120px;
  margin-left: 50px;
  cursor: pointer;
  background-image: linear-gradient(to right, #74ebd5, #acb6e5);
  color: white;
  border-radius: 10px;
`;
