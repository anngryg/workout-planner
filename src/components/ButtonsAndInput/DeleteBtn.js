import "../../styles/DeleteBtn.scss";
import React from "react";
export default function DeleteBtn({ onDeleteBtnClick, exerciseId, label }) {
  return (
    <button
      className="deleteBtn"
      title="Delete"
      onClick={() => onDeleteBtnClick(exerciseId)}>
      {label}
    </button>
  );
}
