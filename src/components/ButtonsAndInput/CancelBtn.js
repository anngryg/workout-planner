import "../../styles/CancelBtn.scss";
import React from "react";
export default function CancelBtn({ onCancelBtnClick }) {
  return (
    <button className="cancelBtn" onClick={onCancelBtnClick}>
      x
    </button>
  );
}
