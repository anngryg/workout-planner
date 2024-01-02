import Input from "./Input.js";
import CancelBtn from "./CancelBtn.js";
import "../styles/NewPlanModal3.scss";
import { useState } from "react";

export default function NewPlanModal3({ formData, setFormData }) {
  return (
    <>
      <div className="content">
        <div className="list">
          <h4>Entered exercises</h4>
        </div>
        <div className="inputs">
          <Input
            label="Exercise name"
            type="text"
            name="exerciseTitle"
            maxLength="40"
            value={""}
          />
          <br></br>
          <label>
            Description and additional information{" "}
            <small>
              (eg. number of series, repetitions, weight, kilometers)
            </small>
          </label>
          <textarea name="exerciseDescription" rows="3"></textarea>
          <button className="styledBtn">+ Add Exercise</button>
        </div>
      </div>
    </>
  );
}
