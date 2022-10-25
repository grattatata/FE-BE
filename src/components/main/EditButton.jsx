import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import feeds from "../../redux/modules/feeds";

const [disable, setDisable] = useState(true);
const inputRef = useRef();
const dispatch = useDispatch();

const onEdit = () => {
  setDisable(false);
};

const EditSave = () => {
  dispatch(__editSave({ ...feeds, ...inputs }));
  setDisable(true);
  alert("수정완료! 😁");
};

function EditButton() {
  return (
    <div>
      <ComInput
        ref={inputRef}
        type="text"
        name="comment"
        value={inputs.comment}
        disabled={disable}
        onChange={onChange}
      />
      {disable ? (
        <button onClick={onEdit}></button>
      ) : (
        <button onClick={EditSave}></button>
      )}
    </div>
  );
}

export default EditButton;
