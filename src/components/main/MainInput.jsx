import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../../redux/modules/feeds";
import styled from "styled-components";

function MainInput() {
  const dispatch = useDispatch();
  const [feed, setfeed] = useState({
    id: 0,
    content: "",
    isDone: false,
  });
  const feeds = useSelector((state) => state.feeds.feeds);
  // const onChangeHandler = (event) => {
  //   const { name, value } = event.target;
  //   setTodo({ ...todo, [name]: value });
  // };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (feed === "") return;

    dispatch(
      addFeed({
        id: feeds.length + 1,
      })
    );
  };

  return (
    <form onSubmit={onSubmitHandler}>
      {/* 전체적인 박스 */}
      <MainInputBox>
        <div>
          <MainInputText
            placeholder="지금 무슨 생각을 하고 계신가요?"
            type="text"
            name="content"
            value={feed.content}
            onChange={(event) => {
              setfeed(event.target.value);
            }}
          />

          <MainButton>추가하기</MainButton>
        </div>
      </MainInputBox>
      {/* 박스1 아래에만 보더줘서 선 만들기 */}
    </form>
  );
}

export default MainInput;

const MainInputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid #71d2c0b5;
  padding: 30px;
`;

const MainInputText = styled.input`
  width: 400px;
  height: 30px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #6ed6c3b9;
  text-align: center;
`;

const MainButton = styled.button`
  border: none;
  height: 36px;
  width: 120px;
  background-color: #acb6e5;
  color: white;
  border-radius: 10px;
  margin-left: 50px;
`;
