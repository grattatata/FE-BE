import React, { useCallback, useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { __editPosts } from "../../redux/modules/posts";

function EditButton({ post }) {
  const [disable, setDisable] = useState(true);
  const inputRef = useRef();
  const dispatch = useDispatch();

  const [input, setInput] = useState({
    title: "",
    content: "",
  });

  const onEdit = () => {
    setDisable(false);
  };

  const EditSave = () => {
    dispatch(__editPosts({ ...post, ...input }));
    setDisable(true);
    alert("수정완료! 😁");
  };

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  }, []);

  useEffect(() => {
    if (!disable) inputRef.current.focus();
  }, [disable]);

  return (
    <div>
      <input ref={inputRef} type="text" name="content" value={input.content} disabled={disable} onChange={onChange} />
      {disable ? <button onClick={onEdit}>수정</button> : <button onClick={EditSave}>수정완료</button>}
    </div>
  );
}

export default EditButton;
