import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../../redux/modules/feeds";
// import styled from "styled-components";

function MainInput() {
  const [content, setContent] = useState("");
  const feeds = useSelector((state) => state.feeds.feeds);
  const dispatch = useDispatch();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (content === "") return;

    dispatch(
      addFeed({
        id: feeds.length + 1,
      })
    );
  };

  return (
    <form onSubmit={onSubmitHandler}>
      {/* 전체적인 박스 */}
      <div>
        박스 1
        <div>
          <input
            placeholder="지금 무슨 생각을 하고 계신가요?"
            type="text"
            value={content}
            onChange={(event) => {
              setContent(event.target.value);
            }}
          />

          <button>추가하기</button>
        </div>
      </div>
      {/* 박스1 아래에만 보더줘서 선 만들기 */}
    </form>
  );
}

export default MainInput;
