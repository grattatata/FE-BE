import React from "react";
import feeds from "../../redux/modules/feeds";

function Comment() {
  const comment = feeds.find((comment) => comment.id === id);
  return <div>댓글</div>;
}

export default Comment;
