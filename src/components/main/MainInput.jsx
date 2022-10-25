import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { __addFeeds } from "../../redux/modules/feeds";
import styled from "styled-components";

function MainInput() {
  const dispatch = useDispatch();

  const [feed, setFeed] = useState({
    content: "",
    isDone: false,
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFeed({ ...feed, [name]: value });
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (feed.content === "") return;

    dispatch(__addFeeds({ ...feed, id: Date.now() }));
    setFeed({
      content: "",
      isDone: false,
    });
  };

  return (
    <form onSubmit={onSubmitHandler}>
      {/* 전체적인 박스 */}
      <MainInputContainer>
        <MainInputBox>
          <MainInputText
            placeholder="지금 무슨 생각을 하고 계신가요?"
            type="text"
            name="content"
            value={feed.content}
            onChange={onChangeHandler}
          />
          <MainButton>추가하기</MainButton>
        </MainInputBox>
      </MainInputContainer>
    </form>
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

const MainInputText = styled.input`
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
