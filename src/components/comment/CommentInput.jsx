import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { __addComments } from "../../redux/modules/comments";

function CommentInput(id) {
  const dispatch = useDispatch();

  const [comment, setComment] = useState({
    comment: "",
    nickname: "",
    createdAt: "",
  });

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (comment.content === "") return;

    dispatch(__addComments({ ...comment, id: id }));
    setComment({
      comment: "",
      nickname: "",
      createdAt: "",
    });
  };
  console.log(comment);
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setComment((feed) => ({ ...feed, [name]: value }));
  }, []);

  return (
    <form onSubmit={onSubmitHandler}>
      <Commentbox>
        <CommentInputText
          maxLength="35"
          placeholder="댓글"
          type="text"
          name="comment"
          value={comment.comment}
          onChange={onChange}
        ></CommentInputText>
        <CommentAddBtn>댓추</CommentAddBtn>
      </Commentbox>
    </form>
  );
}

export default CommentInput;

const Commentbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const CommentInputText = styled.input`
  width: 200px;
`;

const CommentAddBtn = styled.button`
  margin-left: 20px;
  border: none;
  height: 20px;
  width: 80px;
  background-color: #fab8c3ef;
  color: white;
  border-radius: 5px;
`;
