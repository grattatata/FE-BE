import React from "react";
import styled from "styled-components";
import Comment from "./Comment";
import CommentInput from "./CommentInput";
function CommentList() {
  return (
    <div>
      <CommentContainer>
        <CommentInput />
        <Comment />
      </CommentContainer>
    </div>
  );
}

export default CommentList;

const CommentContainer = styled.div`
  border: 1px solid black;
  height: 50px;
  width: inherit;
`;
