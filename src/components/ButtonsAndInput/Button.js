import "../../styles/Button.scss";
import React from "react";

export default function Button({ btnLabel, ...props }) {
  return (
    <button className="styledBtn" {...props}>
      {btnLabel}
    </button>
  );
}
