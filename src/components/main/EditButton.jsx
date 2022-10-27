import React, { useCallback, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import feeds, { __editFeeds } from "../../redux/modules/feeds";

function EditButton() {
  const [disable, setDisable] = useState(true);
  const inputRef = useRef();
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    // title: "",
    // content: "",
    // createdAt: Date.now(),
    // postId: Date.now(),
    userKey: "",
    nickname: "",
    title: "",
    content: "",
    id: "",
  });

  const onEdit = () => {
    setDisable(false);
  };

  // const onEdit = (event) => {
  //   event.preventDefault(event);
  //   dispatch(__editFeeds({ id: feeds.id }));
  // };

  const EditSave = () => {
    dispatch(__editFeeds({ ...feeds }));
    setDisable(true);
    alert("수정완료! 😁");
  };

  const onChangeHandler = useCallback((e) => {
    const { name, value } = e.target;
    setInput((feed) => ({ ...feed, [name]: value }));
  }, []);

  return (
    <div>
      <input
        ref={inputRef}
        type="text"
        name="content"
        defaultValue={input.content}
        disabled={disable}
        onChange={onChangeHandler}
      />
      {disable ? (
        <button onClick={onEdit}>수정</button>
      ) : (
        <button onClick={EditSave}>수정완료</button>
      )}
    </div>
  );
}

export default EditButton;
