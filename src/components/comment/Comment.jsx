import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getComments } from "../../redux/modules/comments";

function Comment({ id }) {
  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state.comments);

  useEffect(() => {
    dispatch(__getComments(id));
  }, [dispatch, id]);

  return (
    <div>
      {/* {comments?.map((comment) => (
        <div key={comment.id} comment={comment}>
          댓글1
        </div>
      ))} */}
      {comments
        ?.filter((comment) => {
          return comment.id == id;
        })
        .map((comment, i) => {
          return <div>{comment}</div>;
        })}
    </div>
  );
}

export default Comment;
