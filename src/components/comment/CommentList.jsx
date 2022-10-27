import React from "react";
import styled from "styled-components";
import Comment from "./Comment";
import CommentInput from "./CommentInput";
function CommentList() {
  return (
    <div>
      <CommentContainer>
        <CommentInput />
        {/* <Comment /> */}
      </CommentContainer>
    </div>
  );
}

export default CommentList;

const CommentContainer = styled.div`
  border-top: 1px solid #7588d8;

  height: 50px;
  width: inherit;
`;
