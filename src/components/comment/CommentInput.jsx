import React from "react";
import styled from "styled-components";
function CommentInput() {
  // const dispatch = useDispatch();

  return (
    <div>
      <CommentInputText
        placeholder="댓글"
        type="text"
        name="comment"
      ></CommentInputText>
      <CommentAddBtn>댓추</CommentAddBtn>
    </div>
  );
}

export default CommentInput;

const CommentInputText = styled.div`
  width: 200px;
`;

const CommentAddBtn = styled.button`
  float: right;
`;
